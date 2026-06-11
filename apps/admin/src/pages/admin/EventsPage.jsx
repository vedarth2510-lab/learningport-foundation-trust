import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react';
import api from '../../lib/api';

const blank = { title: '', description: '', event_date: '', event_time: '', venue: '', registration_link: '', status: 'upcoming' };

export default function EventsPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [imgFile, setImgFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/events').then(r => setItems(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  function startEdit(item) { setEditing(item.id); setForm({ ...item, event_date: item.event_date?.split('T')[0] || '' }); setImgFile(null); }
  function startNew() { setEditing('new'); setForm(blank); setImgFile(null); }
  function cancel() { setEditing(null); }

  async function save() {
    setSaving(true);
    const fd = new FormData();
    ['title','description','event_date','event_time','venue','registration_link','status'].forEach(k => fd.append(k, form[k] ?? ''));
    if (imgFile) fd.append('image', imgFile);
    try {
      if (editing === 'new') await api.post('/events', fd);
      else await api.put(`/events/${editing}`, fd);
      toast.success('Saved!'); cancel(); load();
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function del(id) {
    if (!confirm('Delete event?')) return;
    try { await api.delete(`/events/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <button className="btn-primary flex items-center gap-2" onClick={startNew}><Plus className="h-4 w-4" />Add Event</button>
      </div>

      {editing && (
        <div className="card mb-6 border-l-4 border-primary">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">{editing === 'new' ? 'New Event' : 'Edit Event'}</h2>
            <button onClick={cancel}><X className="h-5 w-5 text-gray-400" /></button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2"><label className="label">Title *</label><input className="input" value={form.title} onChange={set('title')} /></div>
            <div><label className="label">Date</label><input type="date" className="input" value={form.event_date} onChange={set('event_date')} /></div>
            <div><label className="label">Time</label><input className="input" value={form.event_time} onChange={set('event_time')} placeholder="10:00 AM – 4:00 PM" /></div>
            <div className="col-span-2"><label className="label">Venue</label><input className="input" value={form.venue} onChange={set('venue')} /></div>
            <div className="col-span-2"><label className="label">Description</label><textarea className="input" rows={4} value={form.description} onChange={set('description')} /></div>
            <div><label className="label">Registration Link</label><input className="input" value={form.registration_link} onChange={set('registration_link')} placeholder="https://..." /></div>
            <div>
              <label className="label">Status</label>
              <select className="input" value={form.status} onChange={set('status')}>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>
            <div><label className="label">Event Image</label><input type="file" accept="image/*" className="input" onChange={e => setImgFile(e.target.files[0])} /></div>
            {form.image_url && !imgFile && <div className="flex items-end"><img src={form.image_url} alt="" className="h-16 object-cover rounded" /></div>}
          </div>
          <div className="flex gap-3 mt-4">
            <button className="btn-primary flex items-center gap-2" onClick={save} disabled={saving}><Check className="h-4 w-4" />{saving ? 'Saving…' : 'Save'}</button>
            <button className="btn-secondary" onClick={cancel}>Cancel</button>
          </div>
        </div>
      )}

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>{['Image','Title','Date','Venue','Status',''].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="table-td"><img src={item.image_url || '/placeholder.png'} alt="" className="h-10 w-16 object-cover rounded" /></td>
                <td className="table-td font-medium">{item.title}</td>
                <td className="table-td text-sm text-gray-500">{item.event_date ? new Date(item.event_date).toLocaleDateString('en-IN') : '—'}</td>
                <td className="table-td text-sm text-gray-500 max-w-[180px] truncate">{item.venue}</td>
                <td className="table-td"><span className={`px-2 py-0.5 rounded-full text-xs ${item.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{item.status}</span></td>
                <td className="table-td">
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => del(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {!items.length && <tr><td colSpan={6} className="table-td text-center text-gray-400 py-8">No events yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
