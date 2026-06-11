import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, X, Eye, EyeOff } from 'lucide-react';
import api from '../../lib/api';

const blank = { title: '', slug: '', excerpt: '', content: '', author: '', category: '', tags: '', status: 'draft' };

function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

export default function BlogsPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [imgFile, setImgFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => api.get('/blogs').then(r => setItems(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);

  const set = k => e => setForm(f => {
    const updated = { ...f, [k]: e.target.value };
    if (k === 'title' && editing === 'new') updated.slug = slugify(e.target.value);
    return updated;
  });

  function startEdit(item) { setEditing(item.id); setForm(item); setImgFile(null); }
  function startNew() { setEditing('new'); setForm(blank); setImgFile(null); }
  function cancel() { setEditing(null); }

  async function save() {
    setSaving(true);
    const fd = new FormData();
    ['title','slug','excerpt','content','author','category','tags','status'].forEach(k => fd.append(k, form[k] ?? ''));
    if (imgFile) fd.append('image', imgFile);
    try {
      if (editing === 'new') await api.post('/blogs', fd);
      else await api.put(`/blogs/${editing}`, fd);
      toast.success('Saved!'); cancel(); load();
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function del(id) {
    if (!confirm('Delete blog post?')) return;
    try { await api.delete(`/blogs/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  async function toggleStatus(item) {
    const fd = new FormData();
    ['title','slug','excerpt','content','author','category','tags'].forEach(k => fd.append(k, item[k] ?? ''));
    fd.append('status', item.status === 'published' ? 'draft' : 'published');
    try { await api.put(`/blogs/${item.id}`, fd); toast.success('Status updated'); load(); }
    catch { toast.error('Failed'); }
  }

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <button className="btn-primary flex items-center gap-2" onClick={startNew}><Plus className="h-4 w-4" />New Post</button>
      </div>

      {editing && (
        <div className="card mb-6 border-l-4 border-primary">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">{editing === 'new' ? 'New Blog Post' : 'Edit Blog Post'}</h2>
            <button onClick={cancel}><X className="h-5 w-5 text-gray-400 hover:text-gray-600" /></button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="label">Title *</label><input className="input" value={form.title} onChange={set('title')} /></div>
              <div><label className="label">Slug (URL)</label><input className="input" value={form.slug} onChange={set('slug')} /></div>
              <div><label className="label">Author</label><input className="input" value={form.author} onChange={set('author')} /></div>
              <div><label className="label">Category</label><input className="input" value={form.category} onChange={set('category')} /></div>
              <div><label className="label">Tags (comma separated)</label><input className="input" value={form.tags} onChange={set('tags')} /></div>
              <div>
                <label className="label">Status</label>
                <select className="input" value={form.status} onChange={set('status')}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
            <div><label className="label">Excerpt (short summary)</label><textarea className="input" rows={2} value={form.excerpt} onChange={set('excerpt')} /></div>
            <div><label className="label">Full Content</label><textarea className="input" rows={10} value={form.content} onChange={set('content')} /></div>
            <div><label className="label">Cover Image</label><input type="file" accept="image/*" className="input" onChange={e => setImgFile(e.target.files[0])} /></div>
            {form.image_url && !imgFile && <img src={form.image_url} alt="" className="h-28 object-cover rounded" />}
          </div>
          <div className="flex gap-3 mt-4">
            <button className="btn-primary" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save Post'}</button>
            <button className="btn-secondary" onClick={cancel}>Cancel</button>
          </div>
        </div>
      )}

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>{['Cover','Title','Author','Category','Status','Date',''].map(h => <th key={h} className="table-th">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="table-td"><img src={item.image_url || '/placeholder.png'} alt="" className="h-10 w-16 object-cover rounded" /></td>
                <td className="table-td font-medium max-w-[200px] truncate">{item.title}</td>
                <td className="table-td text-gray-500">{item.author}</td>
                <td className="table-td"><span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs">{item.category}</span></td>
                <td className="table-td">
                  <button onClick={() => toggleStatus(item)} className={`px-2 py-0.5 rounded-full text-xs flex items-center gap-1 ${item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {item.status === 'published' ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                    {item.status}
                  </button>
                </td>
                <td className="table-td text-xs text-gray-500">{new Date(item.created_at).toLocaleDateString('en-IN')}</td>
                <td className="table-td">
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => del(item.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {!items.length && <tr><td colSpan={7} className="table-td text-center text-gray-400 py-8">No blog posts yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
