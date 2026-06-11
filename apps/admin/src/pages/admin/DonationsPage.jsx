import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Upload } from 'lucide-react';
import api from '../../lib/api';

const blank = { upi_id: '', bank_name: '', account_number: '', ifsc_code: '', account_holder: '', razorpay_key_id: '', razorpay_enabled: '0', amounts_preset: '500,1000,2500,5000,10000' };

export default function DonationsPage() {
  const [form, setForm] = useState(blank);
  const [qrFile, setQrFile] = useState(null);
  const [qrPreview, setQrPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    api.get('/donations/settings').then(r => {
      if (r.data.id) {
        const d = r.data;
        let preset = '';
        try { preset = JSON.parse(d.amounts_preset || '[]').join(','); } catch { preset = d.amounts_preset || ''; }
        setForm({ upi_id: d.upi_id || '', bank_name: d.bank_name || '', account_number: d.account_number || '', ifsc_code: d.ifsc_code || '', account_holder: d.account_holder || '', razorpay_key_id: d.razorpay_key_id || '', razorpay_enabled: d.razorpay_enabled ? '1' : '0', amounts_preset: preset });
        if (d.qr_image_url) setQrPreview(d.qr_image_url);
      }
    }).catch(() => {});
  }, []);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  async function save(e) {
    e.preventDefault(); setSaving(true);
    const payload = { ...form, razorpay_enabled: form.razorpay_enabled === '1' ? 1 : 0 };
    try {
      const presetArr = form.amounts_preset.split(',').map(s => parseInt(s.trim())).filter(Boolean);
      payload.amounts_preset = JSON.stringify(presetArr);
      await api.put('/donations/settings', payload);
      toast.success('Payment settings saved!');
    } catch { toast.error('Save failed'); } finally { setSaving(false); }
  }

  async function uploadQR() {
    if (!qrFile) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('qr', qrFile);
    try {
      const { data } = await api.post('/donations/qr', fd);
      setQrPreview(data.qr_image_url);
      setQrFile(null);
      toast.success('QR code updated!');
    } catch { toast.error('Upload failed'); } finally { setUploading(false); }
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Donations & Payment Settings</h1>

      {/* QR Code */}
      <div className="card mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">UPI QR Code</h2>
        <div className="flex items-start gap-6">
          {qrPreview
            ? <img src={qrPreview} alt="QR Code" className="w-32 h-32 object-contain border rounded-lg p-2" />
            : <div className="w-32 h-32 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs text-center">No QR uploaded</div>
          }
          <div className="flex-1">
            <label className="label">Upload new QR code image</label>
            <input type="file" accept="image/*" className="input mb-3" onChange={e => setQrFile(e.target.files[0])} />
            <button className="btn-primary flex items-center gap-2" onClick={uploadQR} disabled={!qrFile || uploading}>
              <Upload className="h-4 w-4" />{uploading ? 'Uploading…' : 'Upload QR'}
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={save} className="space-y-6">
        {/* UPI */}
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">UPI Details</h2>
          <div>
            <label className="label">UPI ID</label>
            <input className="input" value={form.upi_id} onChange={set('upi_id')} placeholder="foundation@upi" />
          </div>
          <div>
            <label className="label">Preset Donation Amounts (comma separated, in ₹)</label>
            <input className="input" value={form.amounts_preset} onChange={set('amounts_preset')} placeholder="500,1000,2500,5000,10000" />
            <p className="text-xs text-gray-400 mt-1">These will appear as quick-select buttons on the donation page</p>
          </div>
        </div>

        {/* Bank */}
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Bank Account Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Account Holder Name</label><input className="input" value={form.account_holder} onChange={set('account_holder')} /></div>
            <div><label className="label">Bank Name</label><input className="input" value={form.bank_name} onChange={set('bank_name')} /></div>
            <div><label className="label">Account Number</label><input className="input" value={form.account_number} onChange={set('account_number')} /></div>
            <div><label className="label">IFSC Code</label><input className="input" value={form.ifsc_code} onChange={set('ifsc_code')} /></div>
          </div>
        </div>

        {/* Razorpay */}
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Razorpay Integration</h2>
          <div className="flex items-center gap-3 mb-2">
            <input type="checkbox" id="rz_enabled" checked={form.razorpay_enabled === '1'} onChange={e => setForm(f => ({ ...f, razorpay_enabled: e.target.checked ? '1' : '0' }))} className="w-4 h-4 accent-primary" />
            <label htmlFor="rz_enabled" className="text-sm font-medium text-gray-700">Enable Razorpay Payment Gateway</label>
          </div>
          <div>
            <label className="label">Razorpay Key ID</label>
            <input className="input" value={form.razorpay_key_id} onChange={set('razorpay_key_id')} placeholder="rzp_live_xxxxxxxxxxxx" />
            <p className="text-xs text-gray-400 mt-1">Get your key from the Razorpay Dashboard → Settings → API Keys</p>
          </div>
          {form.razorpay_enabled === '1' && !form.razorpay_key_id && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">⚠️ Enter your Razorpay Key ID to enable online payments.</div>
          )}
        </div>

        <button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Saving…' : 'Save Payment Settings'}</button>
      </form>
    </div>
  );
}
