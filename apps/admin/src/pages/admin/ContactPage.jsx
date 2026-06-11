import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../lib/api';

const blank = { phone: '', email: '', address: '', city: '', state: '', pincode: '', map_embed_url: '', facebook_url: '', twitter_url: '', instagram_url: '', linkedin_url: '', youtube_url: '' };

export default function ContactPage() {
  const [form, setForm] = useState(blank);
  const [saving, setSaving] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    api.get('/contact').then(r => { if (r.data.id) setForm(r.data); }).catch(() => {});
  }, []);

  async function save(e) {
    e.preventDefault(); setSaving(true);
    try { await api.put('/contact', form); toast.success('Contact info saved!'); }
    catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  const Field = ({ label, k, type = 'text', placeholder = '' }) => (
    <div>
      <label className="label">{label}</label>
      <input type={type} className="input" value={form[k]} onChange={set(k)} placeholder={placeholder} />
    </div>
  );

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h1>
      <form onSubmit={save} className="space-y-6">
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Basic Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Phone" k="phone" placeholder="+91 9742854447" />
            <Field label="Email" k="email" type="email" placeholder="enquiry@..." />
          </div>
          <Field label="Street Address" k="address" placeholder="BTM Layout" />
          <div className="grid grid-cols-3 gap-4">
            <Field label="City" k="city" placeholder="Bangalore" />
            <Field label="State" k="state" placeholder="Karnataka" />
            <Field label="Pincode" k="pincode" placeholder="560076" />
          </div>
          <div>
            <label className="label">Google Maps Embed URL</label>
            <textarea className="input" rows={2} value={form.map_embed_url} onChange={set('map_embed_url')} placeholder="https://maps.google.com/embed?..." />
          </div>
        </div>

        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Social Media Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Facebook" k="facebook_url" placeholder="https://facebook.com/..." />
            <Field label="Twitter / X" k="twitter_url" placeholder="https://twitter.com/..." />
            <Field label="Instagram" k="instagram_url" placeholder="https://instagram.com/..." />
            <Field label="LinkedIn" k="linkedin_url" placeholder="https://linkedin.com/..." />
            <Field label="YouTube" k="youtube_url" placeholder="https://youtube.com/..." />
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Saving…' : 'Save Changes'}</button>
      </form>
    </div>
  );
}
