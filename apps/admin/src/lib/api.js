import { supabase } from './supabase';

// Helper to extract table name and row ID from API URLs
function getTableAndId(url) {
  const cleanUrl = url.split('?')[0]; // Remove query params
  const parts = cleanUrl.split('/').filter(Boolean);
  
  if (parts.length === 0) return { table: null, id: null };

  const first = parts[0];
  const second = parts[1];

  let table = null;
  let id = null;

  if (first === 'blogs') table = 'blogs';
  else if (first === 'programs') table = 'programs';
  else if (first === 'testimonials') table = 'testimonials';
  else if (first === 'events') table = 'events';
  else if (first === 'success-stories') table = 'success_stories';
  else if (first === 'gallery') table = 'gallery_images';
  else if (first === 'about') table = 'about_info';
  else if (first === 'banner') table = 'site_banner';
  else if (first === 'contact') table = 'contact_info';
  else if (first === 'stats') table = 'impact_stats';
  else if (first === 'donations') table = 'donation_settings';

  if (second && !isNaN(second)) {
    id = parseInt(second, 10);
  }

  return { table, id };
}

const singletons = ['about_info', 'site_banner', 'contact_info', 'donation_settings'];

// Helper to parse FormData (for file uploads) or JSON payloads
async function parsePayload(payload) {
  if (payload instanceof FormData) {
    const obj = {};
    let file = null;
    let fileKey = null;

    for (const [key, value] of payload.entries()) {
      if (value instanceof File) {
        file = value;
        fileKey = key;
      } else {
        obj[key] = value;
      }
    }

    if (file) {
      // Upload file to Supabase Storage
      const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(fileName, file);

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage.from('uploads').getPublicUrl(data.path);
      
      if (fileKey === 'image') {
        obj.image_url = publicUrl;
      } else if (fileKey === 'photo') {
        obj.photo_url = publicUrl;
      } else if (fileKey === 'qr') {
        obj.qr_image_url = publicUrl;
      } else {
        obj[fileKey] = publicUrl;
      }
    }

    return obj;
  }
  return payload;
}

// Error handler to simulate Axios error response shape
function handleError(error) {
  console.error('API Error:', error);
  const err = new Error(error.message || 'API Error');
  const status = error.status || (error.message?.includes('JWT') || error.message?.includes('invalid') ? 401 : 500);
  
  err.response = {
    status,
    data: { error: error.message }
  };
  
  if (status === 401) {
    localStorage.removeItem('lpf_token');
    window.location.href = '/login';
  }
  
  return Promise.reject(err);
}

// Mocked Axios interface using direct Supabase queries
const api = {
  interceptors: {
    request: { use: () => {} },
    response: { use: () => {} }
  },

  async get(url) {
    try {
      const { table, id } = getTableAndId(url);
      if (!table) throw new Error(`Unknown route: ${url}`);

      let query = supabase.from(table).select('*');
      
      if (id || singletons.includes(table)) {
        const { data, error } = await query.eq('id', id || 1).maybeSingle();
        if (error) throw error;
        return { data: data || {} };
      } else {
        let orderField = 'id';
        let ascending = true;

        if (table === 'blogs') {
          orderField = 'created_at';
          ascending = false;
        } else if (table === 'gallery_images') {
          orderField = 'sort_order';
          ascending = false;
        } else if (['programs', 'testimonials', 'impact_stats', 'success_stories'].includes(table)) {
          orderField = 'sort_order';
          ascending = true;
        }

        query = query.order(orderField, { ascending });

        // Check for limit query parameter
        if (url.includes('?')) {
          const params = new URLSearchParams(url.split('?')[1]);
          const limit = params.get('limit');
          if (limit) {
            query = query.limit(parseInt(limit, 10));
          }
        }

        const { data, error } = await query;
        if (error) throw error;
        return { data: data || [] };
      }
    } catch (err) {
      return handleError(err);
    }
  },

  async post(url, payload) {
    try {
      // 1. Auth Login
      if (url === '/auth/login') {
        const { username, password } = payload;
        const email = username.includes('@') ? username : `${username}@learningport.org`;
        
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          const err = new Error(error.message);
          err.status = 401;
          throw err;
        }
        return { data: { token: data.session.access_token, username } };
      }

      // 2. Auth Change Password
      if (url === '/auth/change-password') {
        const { currentPassword, newPassword } = payload;
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          const err = new Error('Not authenticated');
          err.status = 401;
          throw err;
        }

        // Validate current password by trying to sign in again
        const { error: authError } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: currentPassword
        });
        if (authError) {
          const err = new Error('Current password is incorrect');
          err.status = 401;
          throw err;
        }

        const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
        if (updateError) throw updateError;
        
        return { data: { message: 'Password changed successfully' } };
      }

      // 3. Special Singleton Image Uploads
      if (url === '/banner/image') {
        const obj = await parsePayload(payload);
        const { data, error } = await supabase.from('site_banner').upsert({ id: 1, image_url: obj.image_url }).select().single();
        if (error) throw error;
        return { data: { image_url: obj.image_url } };
      }

      if (url === '/donations/qr') {
        const obj = await parsePayload(payload);
        const { data, error } = await supabase.from('donation_settings').upsert({ id: 1, qr_image_url: obj.qr_image_url }).select().single();
        if (error) throw error;
        return { data: { qr_image_url: obj.qr_image_url } };
      }

      // 4. Standard Table Inserts
      const { table } = getTableAndId(url);
      if (!table) throw new Error(`Unknown route: ${url}`);

      const obj = await parsePayload(payload);
      const { data, error } = await supabase.from(table).insert(obj).select().single();
      if (error) throw error;
      return { data };
    } catch (err) {
      return handleError(err);
    }
  },

  async put(url, payload) {
    try {
      const { table, id } = getTableAndId(url);
      if (!table) throw new Error(`Unknown route: ${url}`);

      const obj = await parsePayload(payload);
      let query = supabase.from(table);

      if (singletons.includes(table)) {
        const { data, error } = await query.upsert({ id: 1, ...obj }).select().single();
        if (error) throw error;
        return { data };
      } else if (id) {
        const { data, error } = await query.update(obj).eq('id', id).select().single();
        if (error) throw error;
        return { data };
      } else {
        throw new Error(`Missing row ID for update on table ${table}`);
      }
    } catch (err) {
      return handleError(err);
    }
  },

  async delete(url) {
    try {
      const { table, id } = getTableAndId(url);
      if (!table || !id) throw new Error(`Unknown or invalid delete route: ${url}`);

      const { data, error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      return { data };
    } catch (err) {
      return handleError(err);
    }
  }
};

export default api;
