import { supabase } from './supabase';

const originalFetch = window.fetch;

window.fetch = async function (input, init) {
  let url = typeof input === 'string' ? input : input.url;

  if (url.startsWith('/api') || url.includes('/api/')) {
    try {
      const parsedUrl = new URL(url, window.location.origin);
      const path = parsedUrl.pathname.replace(/^\/api/, '');
      const params = parsedUrl.searchParams;

      let data = null;

      if (path === '/banner') {
        const { data: banner } = await supabase.from('site_banner').select('*').eq('id', 1).maybeSingle();
        data = banner || {};
      } else if (path === '/stats') {
        const { data: stats } = await supabase.from('impact_stats').select('*').order('sort_order', { ascending: true });
        data = stats || [];
      } else if (path === '/programs') {
        const { data: programs } = await supabase.from('programs').select('*').order('sort_order', { ascending: true });
        data = programs || [];
      } else if (path.startsWith('/programs/')) {
        const id = path.split('/').pop();
        let query = supabase.from('programs').select('*');
        if (isNaN(id)) {
          query = query.eq('detail_url', `/${id}`);
        } else {
          query = query.eq('id', parseInt(id));
        }
        const { data: program } = await query.maybeSingle();
        data = program || null;
      } else if (path === '/testimonials') {
        const { data: testimonials } = await supabase.from('testimonials').select('*').order('sort_order', { ascending: true });
        data = testimonials || [];
      } else if (path === '/gallery') {
        const { data: gallery } = await supabase.from('gallery_images').select('*').order('sort_order', { ascending: false });
        data = gallery || [];
      } else if (path === '/contact') {
        const { data: contact } = await supabase.from('contact_info').select('*').eq('id', 1).maybeSingle();
        data = contact || {};
      } else if (path === '/blogs') {
        const limit = params.get('limit');
        let query = supabase.from('blogs').select('*').order('created_at', { ascending: false });
        if (limit) query = query.limit(parseInt(limit));
        const { data: blogs } = await query;
        data = blogs || [];
      } else if (path.startsWith('/blogs/')) {
        const id = path.split('/').pop();
        let query = supabase.from('blogs').select('*');
        if (isNaN(id)) {
          query = query.eq('slug', id);
        } else {
          query = query.eq('id', parseInt(id));
        }
        const { data: blog } = await query.maybeSingle();
        data = blog || null;
      } else if (path === '/events') {
        const { data: events } = await supabase.from('events').select('*').order('event_date', { ascending: true });
        data = events || [];
      } else if (path === '/success-stories') {
        const { data: stories } = await supabase.from('success_stories').select('*').order('sort_order', { ascending: true });
        data = stories || [];
      } else if (path === '/donations') {
        const { data: donations } = await supabase.from('donation_settings').select('*').eq('id', 1).maybeSingle();
        data = donations || {};
      } else {
        return originalFetch.apply(this, arguments);
      }

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.error('Supabase fetch redirect error for URL:', url, err);
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return originalFetch.apply(this, arguments);
};
