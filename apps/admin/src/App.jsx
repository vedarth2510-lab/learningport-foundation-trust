import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import AboutPage from './pages/admin/AboutPage';
import BannerPage from './pages/admin/BannerPage';
import StatsPage from './pages/admin/StatsPage';
import ProgramsPage from './pages/admin/ProgramsPage';
import TestimonialsPage from './pages/admin/TestimonialsPage';
import GalleryPage from './pages/admin/GalleryPage';
import ContactPage from './pages/admin/ContactPage';
import BlogsPage from './pages/admin/BlogsPage';
import EventsPage from './pages/admin/EventsPage';
import SuccessStoriesPage from './pages/admin/SuccessStoriesPage';
import DonationsPage from './pages/admin/DonationsPage';
import PasswordPage from './pages/admin/PasswordPage';

function RequireAuth({ children }) {
  return localStorage.getItem('lpf_token') ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="banner" element={<BannerPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="donations" element={<DonationsPage />} />
          <Route path="password" element={<PasswordPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
