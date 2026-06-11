import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Image, BarChart2, BookOpen, MessageSquare,
  GalleryHorizontal, Phone, FileText, Calendar, Star, Heart,
  Lock, LogOut, Menu, X, ChevronRight
} from 'lucide-react';

const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/about', label: 'About Page', icon: FileText },
  { to: '/banner', label: 'Hero Banner', icon: Image },
  { to: '/stats', label: 'Impact Stats', icon: BarChart2 },
  { to: '/programs', label: 'Programs', icon: BookOpen },
  { to: '/testimonials', label: 'Testimonials', icon: MessageSquare },
  { to: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { to: '/blogs', label: 'Blog Posts', icon: FileText },
  { to: '/events', label: 'Events', icon: Calendar },
  { to: '/success-stories', label: 'Success Stories', icon: Star },
  { to: '/contact', label: 'Contact Info', icon: Phone },
  { to: '/donations', label: 'Donations & QR', icon: Heart },
  { to: '/password', label: 'Change Password', icon: Lock },
];

export default function Layout() {
  const [sideOpen, setSideOpen] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('lpf_token');
    navigate('/login');
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`;

  const Sidebar = () => (
    <aside className="flex flex-col h-full w-64 bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-200">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">LP</div>
        <div>
          <div className="font-bold text-sm text-gray-900">LPF Admin</div>
          <div className="text-xs text-gray-500">Learning Port Foundation</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {nav.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={linkClass}
            onClick={() => setSideOpen(false)}
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sideOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSideOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSideOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500 ml-2">
            <span className="font-medium text-gray-900">Admin Panel</span>
            <ChevronRight className="h-4 w-4" />
            <span>Learningport Foundation Trust</span>
          </div>
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-primary hover:underline font-medium"
          >
            View Website ↗
          </a>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
