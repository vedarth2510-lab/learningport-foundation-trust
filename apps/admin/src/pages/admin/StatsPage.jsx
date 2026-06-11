import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Pencil, Trash2, Plus, X, Check } from 'lucide-react';
import api from '../../lib/api';

const blank = { icon: 'Award', value: '', label: '', description: '', sort_order: 0 };
const ICONS = ['GraduationCap','Users','MapPin','Award','TrendingUp','Heart','Star','BookOpen','Briefcase'];

export default function StatsPage() {
  const [stats, setStats] = useState([]);
  const [editing, setEditing] = useState(null); // id or 'new'
  const [form, setForm] = useState(blank);
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/stats').then(r => setStats(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  function startEdit(stat) { setEditing(stat.id); setForm(stat); }
  function startNew() { setEditing('new'); setForm(blank); }
  function cancel() { setEditing(null); setForm(blank); }

  async function save() {
    setSaving(true);
    try {
      if (editing === 'new') { await api.post('/stats', form); toast.success('Stat added!'); }
      else { await api.put(`/stats/${editing}`, form); toast.success('Stat updated!'); }
      cancel(); load();
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function del(id) {
    if (!confirm('Delete this stat?')) return;
    try { await api.delete(`/stats/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Impact Statistics</h1>
        <button className="btn-primary flex items-center gap-2" onClick={startNew}><Plus className="h-4 w-4" />Add Stat</button>
      </div>

      {/* Inline form */}
      {editing && (
        <div className="card mb-6 border-l-4 border-primary">
          <h2 className="font-semibold mb-4">{editing === 'new' ? 'New Stat' : 'Edit Stat'}</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">Icon name</label>
              <select className="input" value={form.icon} onChange={set('icon')}>
                {ICONS.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Value</label>
              <input className="input" placeholder="e.g. 2,847" value={form.value} onChange={set('value')} />
            </div>
            <div>
              <label className="label">Label</label>
              <input className="input" placeholder="e.g. Students Trained" value={form.label} onChange={set('label')} />
            </div>
            <div>
              <label className="label">Sort order</label>
              <input className="input" type="number" value={form.sort_order} onChange={set('sort_order')} />
            </div>
            <div className="col-span-2">
              <label className="label">Description</label>
              <input className="input" placeholder="Short description" value={form.description} onChange={set('description')} />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary flex items-center gap-2" onClick={save} disabled={saving}><Check className="h-4 w-4" />{saving ? 'Saving…' : 'Save'}</button>
            <button className="btn-secondary flex items-center gap-2" onClick={cancel}><X className="h-4 w-4" />Cancel</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {['Icon','Value','Label','Description','Order',''].map(h => <th key={h} className="table-th">{h}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {stats.map(s => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="table-td font-mono text-xs">{s.icon}</td>
                <td className="table-td font-bold text-primary">{s.value}</td>
                <td className="table-td font-medium">{s.label}</td>
                <td className="table-td text-gray-500">{s.description}</td>
                <td className="table-td">{s.sort_order}</td>
                <td className="table-td">
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(s)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => del(s.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {!stats.length && <tr><td colSpan={6} className="table-td text-center text-gray-400 py-8">No stats yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
