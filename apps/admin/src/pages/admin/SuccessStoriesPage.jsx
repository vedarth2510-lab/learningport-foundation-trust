import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react';
import api from '../../lib/api';

const blank = { name: '', role: '', location: '', story: '', outcome: '', sort_order: 0 };

export default function SuccessStoriesPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [imgFile, setImgFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/success-stories').then(r => setItems(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  function startEdit(item) { setEditing(item.id); setForm(item); setImgFile(null); }
  function startNew() { setEditing('new'); setForm(blank); setImgFile(null); }
  function cancel() { setEditing(null); }

  async function save() {
    setSaving(true);
    const fd = new FormData();
    ['name','role','location','story','outcome','sort_order'].forEach(k => fd.append(k, form[k] ?? ''));
    if (imgFile) fd.append('photo', imgFile);
    try {
      if (editing === 'new') await api.post('/success-stories', fd);
      else await api.put(`/success-stories/${editing}`, fd);
      toast.success('Saved!'); cancel(); load();
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function del(id) {
    if (!confirm('Delete this story?')) return;
    try { await api.delete(`/success-stories/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Success Stories</h1>
        <button className="btn-primary flex items-center gap-2" onClick={startNew}><Plus className="h-4 w-4" />Add Story</button>
      </div>

      {editing && (
        <div className="card mb-6 border-l-4 border-primary">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">{editing === 'new' ? 'New Story' : 'Edit Story'}</h2>
            <button onClick={cancel}><X className="h-5 w-5 text-gray-400" /></button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Name *</label><input className="input" value={form.name} onChange={set('name')} /></div>
            <div><label className="label">Role / Occupation</label><input className="input" value={form.role} onChange={set('role')} placeholder="e.g. Cloud Engineer, Infosys" /></div>
            <div><label className="label">Location</label><input className="input" value={form.location} onChange={set('location')} placeholder="e.g. BTM Layout Batch 2024" /></div>
            <div><label className="label">Sort Order</label><input type="number" className="input" value={form.sort_order} onChange={set('sort_order')} /></div>
            <div className="col-span-2"><label className="label">Story / Testimonial *</label><textarea className="input" rows={5} value={form.story} onChange={set('story')} /></div>
            <div className="col-span-2"><label className="label">Outcome (key achievement)</label><input className="input" value={form.outcome} onChange={set('outcome')} placeholder="e.g. 90% salary hike, placed at Amazon" /></div>
            <div><label className="label">Photo (optional)</label><input type="file" accept="image/*" className="input" onChange={e => setImgFile(e.target.files[0])} /></div>
            {form.photo_url && !imgFile && <div className="flex items-end"><img src={form.photo_url} alt="" className="h-16 w-16 rounded-full object-cover" /></div>}
          </div>
          <div className="flex gap-3 mt-4">
            <button className="btn-primary flex items-center gap-2" onClick={save} disabled={saving}><Check className="h-4 w-4" />{saving ? 'Saving…' : 'Save'}</button>
            <button className="btn-secondary" onClick={cancel}>Cancel</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (
          <div key={item.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {item.photo_url
                  ? <img src={item.photo_url} alt="" className="h-12 w-12 rounded-full object-cover" />
                  : <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">{item.name?.[0]}</div>
                }
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.role}</div>
                  <div className="text-xs text-gray-400">{item.location}</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button onClick={() => startEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-3.5 w-3.5" /></button>
                <button onClick={() => del(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
            {item.outcome && <div className="mb-2 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">🏆 {item.outcome}</div>}
            <p className="text-sm text-gray-600 italic line-clamp-3">"{item.story}"</p>
          </div>
        ))}
        {!items.length && <div className="col-span-2 text-center text-gray-400 py-16">No success stories yet</div>}
      </div>
    </div>
  );
}
