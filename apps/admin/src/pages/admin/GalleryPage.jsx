import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Upload, Trash2, Pencil, Check, X } from 'lucide-react';
import api from '../../lib/api';

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editCaption, setEditCaption] = useState('');

  const load = () => api.get('/gallery').then(r => setItems(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);

  async function upload() {
    if (!files.length) { toast.error('Select at least one image'); return; }
    setUploading(true);
    try {
      for (const file of files) {
        const fd = new FormData();
        fd.append('image', file);
        fd.append('caption', caption);
        await api.post('/gallery', fd);
      }
      toast.success(`${files.length} image(s) uploaded!`);
      setFiles([]); setCaption(''); load();
    } catch { toast.error('Upload failed'); } finally { setUploading(false); }
  }

  async function del(id) {
    if (!confirm('Delete this image?')) return;
    try { await api.delete(`/gallery/${id}`); toast.success('Deleted'); load(); }
    catch { toast.error('Delete failed'); }
  }

  async function saveCaption(id) {
    try { await api.put(`/gallery/${id}`, { caption: editCaption }); toast.success('Caption updated'); setEditingId(null); load(); }
    catch { toast.error('Failed'); }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h1>

      {/* Upload panel */}
      <div className="card mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Upload Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="label">Select images (multiple allowed)</label>
            <input type="file" accept="image/*" multiple className="input" onChange={e => setFiles(Array.from(e.target.files))} />
            {files.length > 0 && <p className="text-xs text-gray-500 mt-1">{files.length} file(s) selected</p>}
          </div>
          <div>
            <label className="label">Caption (applied to all)</label>
            <input className="input" value={caption} onChange={e => setCaption(e.target.value)} placeholder="Optional caption" />
          </div>
        </div>
        <button className="btn-primary mt-4 flex items-center gap-2" onClick={upload} disabled={uploading || !files.length}>
          <Upload className="h-4 w-4" />
          {uploading ? 'Uploading…' : 'Upload'}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group">
            <div className="relative aspect-video overflow-hidden">
              <img src={item.image_url} alt={item.caption} className="w-full h-full object-cover" />
              <button
                onClick={() => del(item.id)}
                className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              ><Trash2 className="h-4 w-4" /></button>
            </div>
            <div className="p-2">
              {editingId === item.id ? (
                <div className="flex gap-1">
                  <input className="input text-xs py-1 flex-1" value={editCaption} onChange={e => setEditCaption(e.target.value)} autoFocus />
                  <button onClick={() => saveCaption(item.id)} className="p-1 text-green-600"><Check className="h-4 w-4" /></button>
                  <button onClick={() => setEditingId(null)} className="p-1 text-gray-400"><X className="h-4 w-4" /></button>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs text-gray-500 truncate">{item.caption || 'No caption'}</span>
                  <button onClick={() => { setEditingId(item.id); setEditCaption(item.caption || ''); }} className="p-1 text-gray-400 hover:text-gray-600 flex-shrink-0"><Pencil className="h-3.5 w-3.5" /></button>
                </div>
              )}
            </div>
          </div>
        ))}
        {!items.length && <div className="col-span-4 text-center text-gray-400 py-16">No gallery images yet</div>}
      </div>
    </div>
  );
}
