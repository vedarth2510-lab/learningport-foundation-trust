import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Plus, Trash2, Check, ArrowUp, ArrowDown } from 'lucide-react';
import api from '../../lib/api';

export default function AboutPage() {
  const [whyTitle, setWhyTitle] = useState('');
  const [whyContent, setWhyContent] = useState('');
  const [visionTitle, setVisionTitle] = useState('');
  const [visionContent, setVisionContent] = useState('');
  const [missionTitle, setMissionTitle] = useState('');
  const [missionPoints, setMissionPoints] = useState([]);
  const [newPoint, setNewPoint] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.get('/about')
      .then(res => {
        const data = res.data;
        if (data.id) {
          setWhyTitle(data.why_started_title || '');
          setWhyContent(data.why_started_content || '');
          setVisionTitle(data.vision_title || '');
          setVisionContent(data.vision_content || '');
          setMissionTitle(data.mission_title || '');
          try {
            const parsed = typeof data.mission_points === 'string' 
              ? JSON.parse(data.mission_points) 
              : (data.mission_points || []);
            setMissionPoints(Array.isArray(parsed) ? parsed : []);
          } catch (e) {
            setMissionPoints([]);
          }
        }
      })
      .catch(() => {});
  }, []);

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put('/about', {
        why_started_title: whyTitle,
        why_started_content: whyContent,
        vision_title: visionTitle,
        vision_content: visionContent,
        mission_title: missionTitle,
        mission_points: missionPoints
      });
      toast.success('About page content saved!');
    } catch (err) {
      toast.error('Save failed');
    } finally {
      setSaving(false);
    }
  }

  function addPoint() {
    if (!newPoint.trim()) return;
    setMissionPoints([...missionPoints, newPoint.trim()]);
    setNewPoint('');
  }

  function removePoint(idx) {
    setMissionPoints(missionPoints.filter((_, i) => i !== idx));
  }

  function movePoint(idx, dir) {
    if (idx + dir < 0 || idx + dir >= missionPoints.length) return;
    const next = [...missionPoints];
    const temp = next[idx];
    next[idx] = next[idx + dir];
    next[idx + dir] = temp;
    setMissionPoints(next);
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">About Us Content Editor</h1>
      <form onSubmit={save} className="space-y-6">
        {/* Why We Started / About Us */}
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">About Us Section (Why We Started)</h2>
          <div>
            <label className="label">Section Title</label>
            <input 
              type="text" 
              className="input" 
              value={whyTitle} 
              onChange={e => setWhyTitle(e.target.value)} 
              placeholder="e.g. Bridging Gaps, Building Futures" 
            />
          </div>
          <div>
            <label className="label">Section Content</label>
            <textarea 
              className="input" 
              rows={6} 
              value={whyContent} 
              onChange={e => setWhyContent(e.target.value)} 
              placeholder="About the trust, its origin story, and goals..." 
            />
          </div>
        </div>

        {/* Vision */}
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Vision Statement</h2>
          <div>
            <label className="label">Vision Title</label>
            <input 
              type="text" 
              className="input" 
              value={visionTitle} 
              onChange={e => setVisionTitle(e.target.value)} 
              placeholder="Our Vision" 
            />
          </div>
          <div>
            <label className="label">Vision Content</label>
            <textarea 
              className="input" 
              rows={4} 
              value={visionContent} 
              onChange={e => setVisionContent(e.target.value)} 
              placeholder="Vision text..." 
            />
          </div>
        </div>

        {/* Mission List */}
        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Mission Points</h2>
          <div>
            <label className="label">Mission Section Title</label>
            <input 
              type="text" 
              className="input" 
              value={missionTitle} 
              onChange={e => setMissionTitle(e.target.value)} 
              placeholder="Our Mission" 
            />
          </div>
          
          <div>
            <label className="label">Add Mission Point</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="input" 
                value={newPoint} 
                onChange={e => setNewPoint(e.target.value)} 
                placeholder="Type a new mission statement..." 
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addPoint(); } }}
              />
              <button 
                type="button" 
                onClick={addPoint} 
                className="btn-primary flex items-center justify-center p-2.5"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <label className="label">Current Points ({missionPoints.length})</label>
            {missionPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-3 rounded-lg text-sm text-gray-700">
                <span className="font-mono text-xs text-gray-400 w-5">{idx + 1}.</span>
                <span className="flex-1">{point}</span>
                <div className="flex gap-1">
                  <button 
                    type="button" 
                    onClick={() => movePoint(idx, -1)} 
                    disabled={idx === 0} 
                    className="p-1 rounded text-gray-400 hover:bg-gray-200 disabled:opacity-40"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => movePoint(idx, 1)} 
                    disabled={idx === missionPoints.length - 1} 
                    className="p-1 rounded text-gray-400 hover:bg-gray-200 disabled:opacity-40"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => removePoint(idx)} 
                    className="p-1 rounded text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            {missionPoints.length === 0 && (
              <div className="text-center py-6 text-gray-400 text-sm">No mission points added yet</div>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          className="btn-primary flex items-center gap-2" 
          disabled={saving}
        >
          <Check className="h-4 w-4" />
          {saving ? 'Saving Changes…' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
