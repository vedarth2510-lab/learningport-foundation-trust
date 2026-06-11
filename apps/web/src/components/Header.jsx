import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Heart, ChevronDown, GraduationCap, Users, Award, BookOpen, Briefcase, Monitor, Compass, HandHeart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Navbar height in px — used for the 50/50 logo split calculation
const NAV_H = 72;
// Large logo height on home page (must be even so 50% split is clean)
const LOGO_BIG = 144;
// Logo height when scrolled / on other pages — matches navbar height
const LOGO_SMALL = 60;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);
  const [programsMenuTimeout, setProgramsMenuTimeout] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const containerRef = useRef(null);

  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => forceUpdate(n => n + 1);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const showBigLogo = isHomePage && !isScrolled;

  const programs = [
    { name: 'Cloud Computing Training', path: '/cloud-computing-training-in-btm-layout', icon: Monitor, description: 'AWS, Azure & GCP with placement support' },
    { name: 'Skill Development Programs', path: '/skill-development-programs', icon: GraduationCap, description: 'Technical and soft skills for employability' },
    { name: 'Women Empowerment', path: '/women-empowerment-initiatives', icon: HandHeart, description: 'Entrepreneurship & financial literacy' },
    { name: 'Rural Student Support', path: '/rural-student-support', icon: BookOpen, description: 'Educational resources and mentoring' },
    { name: 'Scholarship Programs', path: '/scholarship-programs', icon: Award, description: 'Financial assistance for deserving students' },
    { name: 'Digital Literacy', path: '/digital-literacy-programs', icon: Monitor, description: 'Basic computer and internet skills' },
    { name: 'Career Guidance', path: '/career-guidance-seminars', icon: Compass, description: 'Professional career counseling' },
    { name: 'Internship & Placement', path: '/internship-placement-support', icon: Briefcase, description: 'Job opportunities with 200+ companies' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'CSR Partnership', path: '/csr-partnership' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const isProgramActive = programs.some(p => location.pathname === p.path) || location.pathname === '/programs';

  const handleProgramsEnter = () => {
    if (programsMenuTimeout) clearTimeout(programsMenuTimeout);
    setShowProgramsMenu(true);
  };
  const handleProgramsLeave = () => {
    const t = setTimeout(() => setShowProgramsMenu(false), 120);
    setProgramsMenuTimeout(t);
  };

  const linkClass = (active) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap ${
      active ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-muted'
    }`;

  return (
    <>
      {/* ─── NAVBAR ─────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur transition-all duration-300 overflow-visible ${
          isScrolled ? 'shadow-md' : ''
        }`}
        style={{ height: NAV_H }}
      >
        {/* Container — matches Tailwind container padding (2rem = 32px) */}
        <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* ── LOGO ── */}
          {showBigLogo ? (
            /*
             * Big logo on home page (not scrolled).
             * Sits in normal flex flow so it aligns perfectly with container left edge.
             * Overflows downward via overflow-visible on the header + negative margin trick.
             */
            <Link
              to="/"
              className="flex-shrink-0 relative z-50"
              style={{ marginBottom: -(LOGO_BIG - NAV_H) }}
            >
              <img
                src="/learningport-logo.png"
                alt="Learning Port Foundations"
                style={{ height: LOGO_BIG, width: 'auto' }}
                className="object-contain transition-all duration-300 drop-shadow-md"
              />
            </Link>
          ) : (
            <Link to="/" className="flex-shrink-0">
              <img
                src="/learningport-logo.png"
                alt="Learning Port Foundations"
                style={{ height: LOGO_SMALL, width: 'auto' }}
                className="object-contain transition-all duration-300"
              />
            </Link>
          )}

          {/* No spacer needed — logo is now in normal flow */}

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.slice(0, 2).map(link => (
              <Link key={link.path} to={link.path} className={linkClass(isActive(link.path))}>
                {link.name}
              </Link>
            ))}

            {/* Programs mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={handleProgramsEnter}
              onMouseLeave={handleProgramsLeave}
            >
              <button className={linkClass(isProgramActive) + ' flex items-center gap-1'}>
                Programs
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showProgramsMenu ? 'rotate-180' : ''}`} />
              </button>

              {showProgramsMenu && (
                <div
                  className="absolute top-full left-0 mt-1 w-[760px] bg-background border rounded-xl shadow-2xl p-5 z-50"
                  onMouseEnter={handleProgramsEnter}
                  onMouseLeave={handleProgramsLeave}
                >
                  {/* View all */}
                  <Link
                    to="/programs"
                    onClick={() => setShowProgramsMenu(false)}
                    className="flex items-center gap-3 p-3 mb-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-primary text-sm">View All Programs</div>
                      <div className="text-xs text-muted-foreground">Explore our complete program offerings</div>
                    </div>
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    {programs.map(program => {
                      const Icon = program.icon;
                      return (
                        <Link
                          key={program.path}
                          to={program.path}
                          onClick={() => setShowProgramsMenu(false)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium group-hover:text-primary transition-colors">{program.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{program.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map(link => (
              <Link key={link.path} to={link.path} className={linkClass(isActive(link.path))}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/donate" className="hidden sm:block">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                <Heart className="mr-1.5 h-4 w-4" />
                Donate Now
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE DRAWER ──────────────────────────────────────── */}
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <img src="/learningport-logo.png" alt="Learning Port Foundations" className="h-9 w-auto object-contain" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {/* Home + About */}
          {navLinks.slice(0, 2).map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Programs section */}
          <div className="pt-3">
            <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Programs</p>
            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/programs' ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-foreground'
              }`}
            >
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              View All Programs
            </Link>
            {programs.map(program => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.path}
                  to={program.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(program.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                  {program.name}
                </Link>
              );
            })}
          </div>

          {/* Rest of nav */}
          <div className="pt-3">
            <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">More</p>
            {navLinks.slice(2).map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Donate button pinned at bottom */}
        <div className="px-4 py-4 border-t">
          <Link to="/donate" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              <Heart className="mr-2 h-4 w-4" />
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
