import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, BarChart2, BookOpen, MessageSquare, GalleryHorizontal, Phone, FileText, Calendar, Star, Heart } from 'lucide-react';
import api from '../../lib/api';

const cards = [
  { to: '/about', label: 'About Page', icon: FileText, color: 'bg-indigo-600', desc: 'Edit About, Vision & Mission' },
  { to: '/banner', label: 'Hero Banner', icon: Image, color: 'bg-blue-500', desc: 'Edit homepage banner' },
  { to: '/stats', label: 'Impact Stats', icon: BarChart2, color: 'bg-green-500', desc: 'Update impact numbers' },
  { to: '/programs', label: 'Programs', icon: BookOpen, color: 'bg-purple-500', desc: 'Add / edit programs' },
  { to: '/testimonials', label: 'Testimonials', icon: MessageSquare, color: 'bg-yellow-500', desc: 'Manage reviews' },
  { to: '/gallery', label: 'Gallery', icon: GalleryHorizontal, color: 'bg-pink-500', desc: 'Upload / remove photos' },
  { to: '/blogs', label: 'Blog Posts', icon: FileText, color: 'bg-indigo-500', desc: 'Write & publish blogs' },
  { to: '/events', label: 'Events', icon: Calendar, color: 'bg-orange-500', desc: 'Manage events' },
  { to: '/success-stories', label: 'Success Stories', icon: Star, color: 'bg-teal-500', desc: 'Alumni stories' },
  { to: '/contact', label: 'Contact Info', icon: Phone, color: 'bg-gray-500', desc: 'Update contact details' },
  { to: '/donations', label: 'Donations & QR', icon: Heart, color: 'bg-red-500', desc: 'Payment settings' },
];

export default function Dashboard() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const endpoints = { programs: '/programs', gallery: '/gallery', blogs: '/blogs', events: '/events', testimonials: '/testimonials', stories: '/success-stories' };
    Object.entries(endpoints).forEach(([key, url]) =>
      api.get(url).then(r => setCounts(c => ({ ...c, [key]: r.data.length }))).catch(() => {})
    );
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome to the Learning Port Foundation admin panel</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Programs', val: counts.programs },
          { label: 'Gallery', val: counts.gallery },
          { label: 'Blogs', val: counts.blogs },
          { label: 'Events', val: counts.events },
          { label: 'Testimonials', val: counts.testimonials },
          { label: 'Stories', val: counts.stories },
        ].map(s => (
          <div key={s.label} className="card text-center">
            <div className="text-3xl font-bold text-primary">{s.val ?? '—'}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map(card => (
          <Link key={card.to} to={card.to} className="card hover:shadow-md transition-shadow group flex items-start gap-4">
            <div className={`${card.color} p-3 rounded-xl flex-shrink-0`}>
              <card.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{card.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{card.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
