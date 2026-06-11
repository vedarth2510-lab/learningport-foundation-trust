import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react';
import api from '../../lib/api';

const blank = { name: '', category: '', objective: '', beneficiaries: '', location: '', beneficiary_count: '', success_story: '', detail_url: '', sort_order: 0 };

export default function ProgramsPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [imgFile, setImgFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/programs').then(r => setItems(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  function startEdit(item) { setEditing(item.id); setForm(item); setImgFile(null); }
  function startNew() { setEditing('new'); setForm(blank); setImgFile(null); }
  function cancel() { setEditing(null); }

  async function save() {
    setSaving(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => { if (k !== 'id' && k !== 'image_url' && k !== 'created_at' && k !== 'updated_at') fd.append(k, v ?? ''); });
    if (imgFile) fd.append('image', imgFile);
    try {
      if (editing === 'new') await api.post('/programs', fd);
      else await api.put(`/programs/${editing}`, fd);
      toast.success(editing === 'new' ? 'Program added!' : 'Program updated!');
      cancel(); load();
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function del(id) {
    if (!confirm('Delete this program?')) return;
    try { await api.delete(`/programs/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Programs</h1>
        <button className="btn-primary flex items-center gap-2" onClick={startNew}><Plus className="h-4 w-4" />Add Program</button>
      </div>

      {editing && (
        <div className="card mb-6 border-l-4 border-primary">
          <h2 className="font-semibold mb-4">{editing === 'new' ? 'New Program' : 'Edit Program'}</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="label">Name *</label><input className="input" value={form.name} onChange={set('name')} /></div>
            <div><label className="label">Category</label><input className="input" value={form.category} onChange={set('category')} placeholder="e.g. Technology" /></div>
            <div className="col-span-2"><label className="label">Objective</label><textarea className="input" rows={2} value={form.objective} onChange={set('objective')} /></div>
            <div><label className="label">Beneficiaries</label><input className="input" value={form.beneficiaries} onChange={set('beneficiaries')} /></div>
            <div><label className="label">Location</label><input className="input" value={form.location} onChange={set('location')} /></div>
            <div><label className="label">Beneficiary Count</label><input className="input" value={form.beneficiary_count} onChange={set('beneficiary_count')} placeholder="e.g. 1,247" /></div>
            <div><label className="label">Detail Page URL</label><input className="input" value={form.detail_url} onChange={set('detail_url')} placeholder="/cloud-computing-training-in-btm-layout" /></div>
            <div className="col-span-2"><label className="label">Success Story (quote)</label><textarea className="input" rows={2} value={form.success_story} onChange={set('success_story')} /></div>
            <div><label className="label">Sort Order</label><input className="input" type="number" value={form.sort_order} onChange={set('sort_order')} /></div>
            <div><label className="label">Program Image</label><input type="file" accept="image/*" className="input" onChange={e => setImgFile(e.target.files[0])} /></div>
          </div>
          {form.image_url && !imgFile && <img src={form.image_url} alt="" className="h-24 object-cover rounded mb-3" />}
          <div className="flex gap-3">
            <button className="btn-primary flex items-center gap-2" onClick={save} disabled={saving}><Check className="h-4 w-4" />{saving ? 'Saving…' : 'Save'}</button>
            <button className="btn-secondary flex items-center gap-2" onClick={cancel}><X className="h-4 w-4" />Cancel</button>
          </div>
        </div>
      )}

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>{['Image','Name','Category','Count','Order',''].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="table-td"><img src={item.image_url || '/placeholder.png'} alt="" className="h-12 w-20 object-cover rounded" /></td>
                <td className="table-td font-medium">{item.name}</td>
                <td className="table-td"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">{item.category}</span></td>
                <td className="table-td">{item.beneficiary_count}</td>
                <td className="table-td">{item.sort_order}</td>
                <td className="table-td">
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => del(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {!items.length && <tr><td colSpan={6} className="table-td text-center text-gray-400 py-8">No programs yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
