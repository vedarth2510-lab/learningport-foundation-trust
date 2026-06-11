import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, X, Check, Star } from 'lucide-react';
import api from '../../lib/api';

const blank = { name: '', role: '', text: '', rating: 5, sort_order: 0 };

export default function TestimonialsPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [imgFile, setImgFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/testimonials').then(r => setItems(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  function startEdit(item) { setEditing(item.id); setForm(item); setImgFile(null); }
  function startNew() { setEditing('new'); setForm(blank); setImgFile(null); }
  function cancel() { setEditing(null); }

  async function save() {
    setSaving(true);
    const fd = new FormData();
    ['name','role','text','rating','sort_order'].forEach(k => fd.append(k, form[k] ?? ''));
    if (imgFile) fd.append('photo', imgFile);
    try {
      if (editing === 'new') await api.post('/testimonials', fd);
      else await api.put(`/testimonials/${editing}`, fd);
      toast.success('Saved!'); cancel(); load();
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function del(id) {
    if (!confirm('Delete?')) return;
    try { await api.delete(`/testimonials/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
        <button className="btn-primary flex items-center gap-2" onClick={startNew}><Plus className="h-4 w-4" />Add</button>
      </div>

      {editing && (
        <div className="card mb-6 border-l-4 border-primary">
          <h2 className="font-semibold mb-4">{editing === 'new' ? 'New Testimonial' : 'Edit Testimonial'}</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="label">Name *</label><input className="input" value={form.name} onChange={set('name')} /></div>
            <div><label className="label">Role / Position</label><input className="input" value={form.role} onChange={set('role')} /></div>
            <div className="col-span-2"><label className="label">Testimonial Text *</label><textarea className="input" rows={4} value={form.text} onChange={set('text')} /></div>
            <div>
              <label className="label">Rating (1–5)</label>
              <input className="input" type="number" min={1} max={5} value={form.rating} onChange={set('rating')} />
            </div>
            <div><label className="label">Sort Order</label><input className="input" type="number" value={form.sort_order} onChange={set('sort_order')} /></div>
            <div><label className="label">Photo (optional)</label><input type="file" accept="image/*" className="input" onChange={e => setImgFile(e.target.files[0])} /></div>
            {form.photo_url && !imgFile && <div className="flex items-end"><img src={form.photo_url} alt="" className="h-16 w-16 rounded-full object-cover" /></div>}
          </div>
          <div className="flex gap-3">
            <button className="btn-primary flex items-center gap-2" onClick={save} disabled={saving}><Check className="h-4 w-4" />{saving ? 'Saving…' : 'Save'}</button>
            <button className="btn-secondary flex items-center gap-2" onClick={cancel}><X className="h-4 w-4" />Cancel</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (
          <div key={item.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {item.photo_url
                  ? <img src={item.photo_url} alt="" className="h-10 w-10 rounded-full object-cover" />
                  : <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">{item.name?.[0]}</div>
                }
                <div>
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.role}</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button onClick={() => startEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-3.5 w-3.5" /></button>
                <button onClick={() => del(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
            <div className="flex mb-2">{[...Array(item.rating||5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400"/>)}</div>
            <p className="text-sm text-gray-600 line-clamp-3 italic">"{item.text}"</p>
          </div>
        ))}
        {!items.length && <div className="col-span-2 text-center text-gray-400 py-16">No testimonials yet</div>}
      </div>
    </div>
  );
}
