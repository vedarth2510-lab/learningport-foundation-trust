import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../lib/api';

export default function BannerPage() {
  const [form, setForm] = useState({ title: '', subtitle: '', badge: '', button1_text: '', button1_link: '', button2_text: '', button2_link: '' });
  const [imgFile, setImgFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    api.get('/banner').then(r => {
      const d = r.data;
      setForm({ title: d.title || '', subtitle: d.subtitle || '', badge: d.badge || '', button1_text: d.button1_text || '', button1_link: d.button1_link || '', button2_text: d.button2_text || '', button2_link: d.button2_link || '' });
      if (d.image_url) setPreview(d.image_url);
    }).catch(() => {});
  }, []);

  async function saveText(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put('/banner', form);
      toast.success('Banner content updated!');
    } catch { toast.error('Failed to save'); } finally { setSaving(false); }
  }

  async function uploadImage() {
    if (!imgFile) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('image', imgFile);
    try {
      const { data } = await api.post('/banner/image', fd);
      setPreview(data.image_url);
      setImgFile(null);
      toast.success('Banner image updated!');
    } catch { toast.error('Upload failed'); } finally { setUploading(false); }
  }

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Hero Banner</h1>

      {/* Image */}
      <div className="card mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Banner Image</h2>
        {preview && <img src={preview} alt="current banner" className="w-full h-48 object-cover rounded-lg mb-4 border" />}
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="label">Upload new image</label>
            <input type="file" accept="image/*" className="input" onChange={e => setImgFile(e.target.files[0])} />
          </div>
          <button className="btn-primary" onClick={uploadImage} disabled={!imgFile || uploading}>
            {uploading ? 'Uploading…' : 'Upload'}
          </button>
        </div>
      </div>

      {/* Text content */}
      <form onSubmit={saveText} className="card space-y-4">
        <h2 className="font-semibold text-gray-800">Banner Content</h2>
        <div>
          <label className="label">Badge text</label>
          <input className="input" value={form.badge} onChange={set('badge')} placeholder="e.g. Registered NGO · Karnataka · Est. 2015" />
        </div>
        <div>
          <label className="label">Heading (H1)</label>
          <textarea className="input" rows={3} value={form.title} onChange={set('title')} placeholder="Main headline" />
        </div>
        <div>
          <label className="label">Subtitle / Description</label>
          <textarea className="input" rows={4} value={form.subtitle} onChange={set('subtitle')} placeholder="Supporting description text" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Button 1 — Text</label>
            <input className="input" value={form.button1_text} onChange={set('button1_text')} placeholder="Donate Now" />
          </div>
          <div>
            <label className="label">Button 1 — Link</label>
            <input className="input" value={form.button1_link} onChange={set('button1_link')} placeholder="/donate" />
          </div>
          <div>
            <label className="label">Button 2 — Text</label>
            <input className="input" value={form.button2_text} onChange={set('button2_text')} placeholder="Explore Programs" />
          </div>
          <div>
            <label className="label">Button 2 — Link</label>
            <input className="input" value={form.button2_link} onChange={set('button2_link')} placeholder="/programs" />
          </div>
        </div>
        <button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Saving…' : 'Save Changes'}</button>
      </form>
    </div>
  );
}
