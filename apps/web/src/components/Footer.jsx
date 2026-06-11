import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const [contactInfo, setContactInfo] = useState({
    phone: '+91 9742854447',
    email: 'enquiry@learningportfoundation.org',
    address: 'Bangalore, Karnataka, India'
  });

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => {
        if (data && data.phone) {
          setContactInfo({
            phone: data.phone,
            email: data.email,
            address: data.address || `${data.city}, ${data.state}, India`
          });
        }
      })
      .catch(err => console.log('Using static contact info fallback', err));
  }, []);

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Donate', path: '/donate' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/footer-logo.png" 
                alt="Learning Port Foundations" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Learning Port</span>
                <span className="text-xs">Foundation Trust</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering rural youth through education, skill development, and employment opportunities.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm break-all">{contactInfo.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-4 block">Our Programs</span>
            <ul className="space-y-2">
              {[
                { name: 'Cloud Computing', path: '/cloud-computing-training-in-btm-layout' },
                { name: 'Skill Development', path: '/skill-development-programs' },
                { name: 'Women Empowerment', path: '/women-empowerment-initiatives' },
                { name: 'Digital Literacy', path: '/digital-literacy-programs' },
                { name: 'Career Guidance', path: '/career-guidance-seminars' },
                { name: 'Scholarship Programs', path: '/scholarship-programs' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} Learningport Foundation Trust. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center">
            <Link to="/privacy" className="text-sm hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <a 
              href={import.meta.env.DEV ? "http://localhost:3001" : "/admin"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-primary/10 hover:bg-primary text-primary hover:text-white px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
