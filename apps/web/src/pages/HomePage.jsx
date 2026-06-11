import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart, Users, ArrowRight, GraduationCap, Award, BookOpen,
  Briefcase, Monitor, Compass, HandHeart, CheckCircle,
  Quote, Star, Phone, Mail, MapPin, TrendingUp, Shield, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImpactStatistics from '@/components/ImpactStatistics';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

const programIconMap = {
  Monitor,
  GraduationCap,
  HandHeart,
  BookOpen,
  Award,
  Compass,
  Briefcase
};

function HomePage() {
  const [banner, setBanner] = useState({
    badge: 'Registered NGO · Karnataka · Est. 2015',
    title: 'Empowering through Education, Skills & Employment',
    subtitle: 'Building brighter futures for underserved communities across Karnataka through comprehensive education programs, vocational training, and sustainable livelihood initiatives.',
    button1_text: 'Donate Now',
    button1_link: '/donate',
    button2_text: 'Explore Programs',
    button2_link: '/programs',
    image_url: '/homepage-banner.png'
  });

  const [programs, setPrograms] = useState([
    { name: 'Cloud Computing', path: '/cloud-computing-training-in-btm-layout', icon: Monitor, color: 'bg-blue-500', desc: 'AWS, Azure & GCP with 89% placement rate' },
    { name: 'Skill Development', path: '/skill-development-programs', icon: GraduationCap, color: 'bg-green-500', desc: '73% placement rate across 15+ programs' },
    { name: 'Women Empowerment', path: '/women-empowerment-initiatives', icon: HandHeart, color: 'bg-pink-500', desc: '1,234 women achieved financial independence' },
    { name: 'Rural Student Support', path: '/rural-student-support', icon: BookOpen, color: 'bg-orange-500', desc: '2,847 students supported with resources' },
    { name: 'Scholarship Programs', path: '/scholarship-programs', icon: Award, color: 'bg-yellow-500', desc: '892 scholarships worth ₹1.2 Cr disbursed' },
    { name: 'Digital Literacy', path: '/digital-literacy-programs', icon: Monitor, color: 'bg-cyan-500', desc: '1,567 trained in 45+ community centres' },
    { name: 'Career Guidance', path: '/career-guidance-seminars', icon: Compass, color: 'bg-indigo-500', desc: '3,421 students guided across Karnataka' },
    { name: 'Internship & Placement', path: '/internship-placement-support', icon: Briefcase, color: 'bg-emerald-500', desc: '1,089 placements with 200+ companies' },
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      name: 'Ravi S.',
      role: 'Cloud Engineer, MNC Bangalore',
      text: 'After 3 years as a manual tester, I joined the AWS training here. Within 4 months I landed a Cloud Support role with a 90% salary hike. The hands-on labs made all the difference.',
      rating: 5,
    },
    {
      name: 'Priya M.',
      role: 'Azure Administrator',
      text: 'The Azure training is structured brilliantly. Small batch size meant I could ask all my doubts freely. I cleared AZ-104 in my first attempt. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Lakshmi D.',
      role: 'Tailoring Business Owner',
      text: 'Learning Port Foundations gave me the skills and confidence to start my own tailoring business. Today I employ 5 other women from my village.',
      rating: 5,
    },
  ]);

  useEffect(() => {
    // 1. Fetch Banner
    fetch('/api/banner')
      .then(res => res.json())
      .then(data => {
        if (data && data.title) {
          setBanner(data);
        }
      })
      .catch(err => console.log('Banner API error, using fallback', err));

    // 2. Fetch Programs
    fetch('/api/programs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const colorList = ['bg-blue-500', 'bg-green-500', 'bg-pink-500', 'bg-orange-500', 'bg-yellow-500', 'bg-cyan-500', 'bg-indigo-500', 'bg-emerald-500'];
          const mapped = data.map((item, idx) => ({
            name: item.name,
            path: item.detail_url || '/programs',
            icon: programIconMap[item.icon] || BookOpen,
            color: colorList[idx % colorList.length],
            desc: item.objective || item.success_story
          }));
          setPrograms(mapped);
        }
      })
      .catch(err => console.log('Programs API error, using fallback', err));

    // 3. Fetch Testimonials
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data.map(item => ({
            name: item.name,
            role: item.role,
            text: item.text,
            rating: item.rating || 5
          })));
        }
      })
      .catch(err => console.log('Testimonials API error, using fallback', err));
  }, []);

  const whyUs = [
    { icon: Shield, title: 'Trusted Since 2015', desc: 'Over a decade of transforming rural lives across Karnataka' },
    { icon: Users, title: '5,000+ Alumni', desc: 'Working at Infosys, TCS, Amazon, Microsoft and more' },
    { icon: TrendingUp, title: '85% Placement Rate', desc: 'Industry-leading outcomes across all programs' },
    { icon: Clock, title: 'Flexible Learning', desc: 'Weekday, weekend & online batches to suit your schedule' },
    { icon: Award, title: 'Certified Trainers', desc: '8–15 years of live project experience in top MNCs' },
    { icon: CheckCircle, title: '100% Free Support', desc: 'Resume, LinkedIn, mock interviews & referrals included' },
  ];

  return (
    <>
      <Helmet>
        <title>Learningport Foundation Trust – Empowering Rural Youth Through Education</title>
        <meta name="description" content="Learningport Foundation Trust empowers rural youth through education, skill development, and employment opportunities in Karnataka, India." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* ── HERO ─────────────────────────────────────────────── */}
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src={banner.image_url}
                alt="Students learning together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
              {/* subtle red accent bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <Badge className="mb-5 bg-primary/90 text-white text-sm px-4 py-1.5">
                  {banner.badge}
                </Badge>
                <h1 className="text-white mb-6 leading-tight">
                  {banner.title}
                </h1>
                <p className="text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
                  {banner.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {banner.button1_text && (
                    <Link to={banner.button1_link || '#'}>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30">
                        <Heart className="mr-2 h-5 w-5" />
                        {banner.button1_text}
                      </Button>
                    </Link>
                  )}
                  {banner.button2_text && (
                    <Link to={banner.button2_link || '#'}>
                      <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm">
                        <GraduationCap className="mr-2 h-5 w-5" />
                        {banner.button2_text}
                      </Button>
                    </Link>
                  )}
                  <Link to="/volunteer">
                    <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm">
                      <Users className="mr-2 h-5 w-5" />
                      Volunteer
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
                <div className="w-1.5 h-2.5 bg-white/70 rounded-full" />
              </div>
            </motion.div>
          </section>

          {/* ── IMPACT STATS ─────────────────────────────────────── */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-12">
                <Badge className="mb-3 bg-primary/10 text-primary">Our Impact</Badge>
                <h2 className="mb-4">Making a Real Difference</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Numbers that reflect lives transformed across rural Karnataka
                </p>
              </motion.div>
              <ImpactStatistics />
            </div>
          </section>

          {/* ── PROGRAMS BENTO GRID ──────────────────────────────── */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-background to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-12">
                <Badge className="mb-3 bg-primary/10 text-primary">What We Offer</Badge>
                <h2 className="mb-3">Our Programs</h2>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  Eight comprehensive programs designed to unlock potential and create lasting change
                </p>
              </motion.div>

              {/* Bento grid — fixed 4-col layout on lg, graceful collapse on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4">

                {/* ── Cell 0: FEATURED (2-col × 2-row) ── */}
                {programs[0] && (() => {
                  const p = programs[0]; const Icon = p.icon;
                  return (
                    <motion.div
                      {...fadeUp(0)}
                      className="lg:col-span-2 lg:row-span-2 col-span-1 sm:col-span-2"
                    >
                      <Link to={p.path} className="group block h-full">
                        <div className="relative h-full rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 p-7 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.015]">
                          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                          <div className="absolute -bottom-14 -left-8 w-52 h-52 rounded-full bg-black/10" />
                          <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-5 shadow-inner">
                              <Icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 leading-snug">{p.name}</h3>
                            <p className="text-sm text-white/80 leading-relaxed max-w-xs">{p.desc}</p>
                          </div>
                          <div className="relative z-10 flex items-center justify-between mt-6">
                            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">Featured Program</span>
                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-200">
                              <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })()}

                {/* ── Row 1 right: programs[1] Skill Dev, programs[2] Women Empowerment ── */}
                {programs.slice(1, 3).map((p, relIdx) => {
                  const Icon = p.icon;
                  const styles = [
                    { bg: 'bg-emerald-50', text: 'text-emerald-600', iconBg: 'bg-emerald-100' },
                    { bg: 'bg-pink-50',    text: 'text-pink-600',    iconBg: 'bg-pink-100'    },
                  ];
                  const s = styles[relIdx];
                  return (
                    <motion.div key={p.path} {...fadeUp((relIdx + 1) * 0.09)} className="col-span-1">
                      <Link to={p.path} className="group block h-full">
                        <div className={`relative h-full rounded-2xl ${s.bg} border border-white/80 shadow-sm p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                          <div>
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${s.iconBg} mb-3`}>
                              <Icon className={`h-5 w-5 ${s.text}`} />
                            </div>
                            <h3 className="text-sm font-bold text-foreground mb-1 leading-snug">{p.name}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
                          </div>
                          <div className={`flex items-center gap-1 text-xs font-semibold ${s.text} mt-3`}>
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* ── Row 2 right: programs[3] Rural Student + programs[7] Internship ── */}
                {[programs[3], programs[7]].filter(Boolean).map((p, relIdx) => {
                  const Icon = p.icon;
                  const styles = [
                    { bg: 'bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100' },
                    { bg: 'bg-teal-50',   text: 'text-teal-600',   iconBg: 'bg-teal-100'   },
                  ];
                  const s = styles[relIdx];
                  return (
                    <motion.div key={p.path} {...fadeUp((relIdx + 3) * 0.09)} className="col-span-1">
                      <Link to={p.path} className="group block h-full">
                        <div className={`relative h-full rounded-2xl ${s.bg} border border-white/80 shadow-sm p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                          <div>
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${s.iconBg} mb-3`}>
                              <Icon className={`h-5 w-5 ${s.text}`} />
                            </div>
                            <h3 className="text-sm font-bold text-foreground mb-1 leading-snug">{p.name}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
                          </div>
                          <div className={`flex items-center gap-1 text-xs font-semibold ${s.text} mt-3`}>
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* ── Row 3 left: programs[4] Scholarship — WIDE (2-col) ── */}
                {programs[4] && (() => {
                  const p = programs[4]; const Icon = p.icon;
                  return (
                    <motion.div {...fadeUp(0.36)} className="lg:col-span-2 col-span-1 sm:col-span-2">
                      <Link to={p.path} className="group block h-full">
                        <div className="relative h-full rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-300 p-6 flex items-center gap-6 overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.012]">
                          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/15" />
                          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-sm shadow-inner">
                            <Icon className="h-7 w-7 text-amber-900" />
                          </div>
                          <div className="relative z-10 flex-1 min-w-0">
                            <h3 className="text-base font-bold text-amber-900 mb-1">{p.name}</h3>
                            <p className="text-xs text-amber-800/80 leading-relaxed line-clamp-2">{p.desc}</p>
                          </div>
                          <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors duration-200">
                            <ArrowRight className="h-4 w-4 text-amber-900" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })()}

                {/* ── Row 3 right: programs[5] Digital Lit + programs[6] Career ── */}
                {programs.slice(5, 7).map((p, relIdx) => {
                  const Icon = p.icon;
                  const schemes = [
                    { bg: 'bg-gradient-to-br from-cyan-500 to-sky-400',     label: 'text-white/70' },
                    { bg: 'bg-gradient-to-br from-indigo-500 to-violet-400', label: 'text-white/70' },
                  ];
                  const s = schemes[relIdx];
                  return (
                    <motion.div key={p.path} {...fadeUp((relIdx + 5) * 0.07)} className="col-span-1">
                      <Link to={p.path} className="group block h-full">
                        <div className={`relative h-full rounded-2xl ${s.bg} p-5 flex flex-col justify-between overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                          <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 mb-3">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-white mb-1 leading-snug">{p.name}</h3>
                            <p className={`text-xs ${s.label} leading-relaxed line-clamp-2`}>{p.desc}</p>
                          </div>
                          <div className={`relative z-10 flex items-center gap-1 text-xs font-semibold ${s.label} mt-3`}>
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div {...fadeUp(0.5)} className="text-center mt-10">
                <Link to="/programs">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    View All Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ── MISSION ──────────────────────────────────────────── */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <motion.div {...fadeUp()}>
                  <Badge className="mb-4 bg-primary/10 text-primary">Our Mission</Badge>
                  <h2 className="mb-6">Breaking the Cycle of Poverty Through Education</h2>
                  <p className="text-lg leading-relaxed mb-5 text-muted-foreground">
                    Learningport Foundation Trust is dedicated to creating sustainable change in rural communities
                    by providing access to quality education, skill development programs, and employment opportunities.
                  </p>
                  <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                    We believe education is the foundation for lasting social impact. Through our programs, we
                    empower youth with the skills and knowledge they need to build successful careers and
                    contribute to their communities.
                  </p>
                  <div className="space-y-3 mb-8">
                    {['Industry-aligned curriculum updated every quarter', 'Dedicated placement cell with 200+ hiring partners', 'Scholarship support for economically weaker students', 'Women-first initiatives across all programs'].map(point => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/about">
                    <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div {...fadeUp(0.15)} className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/aboutus.png"
                      alt="About Learningport Foundation Trust"
                      className="w-full h-[480px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  {/* Floating stat card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-border">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Years of Impact</div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-primary rounded-2xl shadow-xl p-5 text-white">
                    <div className="text-3xl font-bold">5K+</div>
                    <div className="text-sm opacity-90">Alumni Network</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-12">
                <Badge className="mb-3 bg-primary/10 text-primary">Why Us</Badge>
                <h2 className="mb-4">Why Choose Learning Port Foundations?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  What sets us apart from every other training institute in Bangalore
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.title} {...fadeUp(i * 0.08)}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                        <CardContent className="p-6 flex gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── TESTIMONIALS ─────────────────────────────────────── */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-12">
                <Badge className="mb-3 bg-primary/10 text-primary">Success Stories</Badge>
                <h2 className="mb-4">What Our Students Say</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real stories from people whose lives were transformed
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div key={t.name} {...fadeUp(i * 0.1)}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                      <CardContent className="p-7">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(t.rating)].map((_, j) => (
                            <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <div className="border-t pt-4">
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-muted-foreground">{t.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp(0.3)} className="text-center mt-10">
                <Link to="/success-stories">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Read More Success Stories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ── HOW YOU CAN HELP ─────────────────────────────────── */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-12">
                <Badge className="mb-3 bg-primary/10 text-primary">Get Involved</Badge>
                <h2 className="mb-4">How You Can Help</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join us in our mission to transform lives through education and empowerment
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: Heart,
                    title: 'Make a Donation',
                    desc: 'Your contribution helps us provide education, training, and opportunities to deserving students. Every rupee makes a difference.',
                    cta: 'Donate Now',
                    path: '/donate',
                    accent: true,
                  },
                  {
                    icon: Users,
                    title: 'Volunteer Your Time',
                    desc: 'Share your skills and expertise to mentor students, conduct workshops, or support our programs in meaningful ways.',
                    cta: 'Become a Volunteer',
                    path: '/volunteer',
                    accent: false,
                  },
                  {
                    icon: Briefcase,
                    title: 'CSR Partnership',
                    desc: 'Partner with us to fulfil your CSR obligations while creating real, measurable social impact in rural Karnataka.',
                    cta: 'Partner With Us',
                    path: '/csr-partnership',
                    accent: false,
                  },
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <motion.div key={card.title} {...fadeUp(i * 0.1)}>
                      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                        <CardContent className="p-8 flex flex-col h-full">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${card.accent ? 'bg-primary' : 'bg-primary/10'}`}>
                            <Icon className={`h-7 w-7 ${card.accent ? 'text-white' : 'text-primary'}`} />
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{card.desc}</p>
                          <Link to={card.path}>
                            <Button className={`w-full ${card.accent ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-primary/10 hover:bg-primary hover:text-white text-primary'}`}>
                              {card.cta}
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── CONTACT STRIP ────────────────────────────────────── */}
          <section className="py-14 bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <motion.div {...fadeUp()}>
                  <h2 className="text-white mb-2">Ready to Transform Your Future?</h2>
                  <p className="text-white/80 text-lg">Talk to our counselors today — free consultation, no obligations.</p>
                </motion.div>
                <motion.div {...fadeUp(0.1)} className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <div className="flex items-center gap-3 text-white/90">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">+91 9742854447</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">enquiry@learningportfoundation.org</span>
                  </div>
                  <Link to="/contact">
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
