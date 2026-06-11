
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import CloudComputingPage from './pages/CloudComputingPage';
import SkillDevelopmentPage from './pages/SkillDevelopmentPage';
import WomenEmpowermentPage from './pages/WomenEmpowermentPage';
import RuralStudentSupportPage from './pages/RuralStudentSupportPage';
import ScholarshipProgramsPage from './pages/ScholarshipProgramsPage';
import DigitalLiteracyPage from './pages/DigitalLiteracyPage';
import CareerGuidancePage from './pages/CareerGuidancePage';
import InternshipPlacementPage from './pages/InternshipPlacementPage';
import RegisterPlacementPage from './pages/RegisterPlacementPage';
import ScheduleCounselingPage from './pages/ScheduleCounselingPage';
import GalleryPage from './pages/GalleryPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import CSRPartnershipPage from './pages/CSRPartnershipPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProgramDetailPage from './pages/ProgramDetailPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:id" element={<ProgramDetailPage />} />
        <Route path="/cloud-computing-training-in-btm-layout" element={<CloudComputingPage />} />
        <Route path="/skill-development-programs" element={<SkillDevelopmentPage />} />
        <Route path="/women-empowerment-initiatives" element={<WomenEmpowermentPage />} />
        <Route path="/rural-student-support" element={<RuralStudentSupportPage />} />
        <Route path="/scholarship-programs" element={<ScholarshipProgramsPage />} />
        <Route path="/digital-literacy-programs" element={<DigitalLiteracyPage />} />
        <Route path="/career-guidance-seminars" element={<CareerGuidancePage />} />
        <Route path="/internship-placement-support" element={<InternshipPlacementPage />} />
        <Route path="/register-placement" element={<RegisterPlacementPage />} />
        <Route path="/schedule-counseling" element={<ScheduleCounselingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/csr-partnership" element={<CSRPartnershipPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
