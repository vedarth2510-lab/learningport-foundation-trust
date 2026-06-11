
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Shield, Target, Heart, Users, Lightbulb,
  Building2, Eye, FileText, CheckCircle2, Quote
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

function AboutPage() {
  const [aboutInfo, setAboutInfo] = useState({
    why_started_title: 'Bridging Gaps, Building Futures',
    why_started_content:
      'Learningport Foundation Trust is a non-profit organization dedicated to empowering students, youth, women, and underserved communities through education, skill development, employment support, and social welfare initiatives.\n\nOur mission is to create equal opportunities by providing quality training, career guidance, digital literacy, health awareness, and community development programs. We work to bridge the gap between talent and opportunity, helping individuals gain the skills, confidence, and knowledge needed to build successful and self-reliant futures.\n\nThrough partnerships, awareness campaigns, workshops, and outreach initiatives, we strive to promote inclusive growth, sustainable development, and positive social change across communities.',
    vision_title: 'Our Vision',
    vision_content:
      'To create an empowered, inclusive, and sustainable society where every individual has access to quality education, skill development, employment opportunities, and a dignified life. We envision self-reliant communities strengthened through knowledge, social empowerment, and equal opportunities for growth.\n\nThrough environmental awareness, health programs, and community welfare activities, we strive to promote sustainable development and social responsibility — inspiring positive change and building a brighter future for generations to come.\n\nBridging Gaps, Building Futures.',
    mission_title: 'Our Mission',
    mission_points: [
      'Provide quality education, skill development, and lifelong learning for students, youth, and underserved communities.',
      'Empower women through education, digital literacy, entrepreneurship, leadership, and employment support.',
      'Promote health, hygiene, and wellness through awareness programs and community outreach activities.',
      'Create environmental awareness and encourage sustainable practices through conservation initiatives.',
      'Support rural and economically disadvantaged communities through livelihood enhancement programs.',
      'Foster youth development through career guidance, mentorship, leadership training, and cultural activities.',
      'Raise awareness on social issues including digital literacy, financial literacy, and gender equality.',
      'Bridge the gap between education and employment by providing industry-relevant training and placement assistance.',
      'Preserve and promote cultural values, heritage, and community participation through educational events.',
      'Collaborate with institutions, government bodies, NGOs, and CSR partners to create sustainable social impact.',
    ],
  });

  useEffect(() => {
    fetch('/api/about')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.why_started_title) {
          let points = [];
          try {
            points =
              typeof data.mission_points === 'string'
                ? JSON.parse(data.mission_points)
                : data.mission_points || [];
          } catch (e) {
            points = [];
          }
          setAboutInfo({
            why_started_title: data.why_started_title,
            why_started_content: data.why_started_content,
            vision_title: data.vision_title,
            vision_content: data.vision_content,
            mission_title: data.mission_title,
            mission_points: Array.isArray(points) ? points : [],
          });
        }
      })
      .catch((err) => console.log('About API error, using fallback', err));
  }, []);

  const coreValues = [
    { icon: Shield,     title: 'Integrity',             description: 'Transparency and ethical practices across all our operations and programs.' },
    { icon: Users,      title: 'Empowerment',            description: 'Enabling every individual to reach their full potential through education.' },
    { icon: Heart,      title: 'Equality',               description: 'Ensuring equal opportunities for all, regardless of background or circumstance.' },
    { icon: Building2,  title: 'Social Responsibility',  description: 'Contributing actively to sustainable development within our communities.' },
    { icon: Lightbulb,  title: 'Innovation',             description: 'Adopting creative, forward-thinking approaches to solve educational challenges.' },
    { icon: Target,     title: 'Community Development',  description: 'Building stronger, more self-reliant communities through purposeful action.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Learningport Foundation Trust – NGO Bangalore Karnataka</title>
        <meta
          name="description"
          content="Learn about Learningport Foundation Trust's mission, vision, values, and commitment to empowering rural youth through education and skill development in Karnataka."
        />
        <meta
          name="keywords"
          content="Learningport Foundation Trust about, NGO Bangalore Karnataka, rural youth education NGO, skill development NGO Karnataka, non-profit Bangalore"
        />
        <link rel="canonical" href="https://www.learningportfoundation.org/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Learningport Foundation Trust – NGO Bangalore Karnataka" />
        <meta property="og:description" content="Learn about Learningport Foundation Trust's mission, vision, values, and commitment to empowering rural youth through education and skill development in Karnataka." />
        <meta property="og:url" content="https://www.learningportfoundation.org/about" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Learningport Foundation Trust – NGO Bangalore Karnataka" />
        <meta name="twitter:description" content="Learn about Learningport Foundation Trust's mission, vision, values, and commitment to empowering rural youth through education and skill development in Karnataka." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="About Learningport Foundation Trust"
            subtitle="A non-profit dedicated to transforming lives through education, skill development, and sustainable opportunities for rural youth across Karnataka."
            badge="About Us"
          />

          {/* ── WHO WE ARE ─────────────────────────────────────── */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <motion.div {...fadeUp()}>
                  <Badge className="mb-3 bg-primary/10 text-primary text-xs">Who We Are</Badge>
                  <h2 className="text-2xl font-bold mb-4 leading-snug">
                    {aboutInfo.why_started_title}
                  </h2>
                  <div className="space-y-3">
                    {aboutInfo.why_started_content.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                        
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.1)} className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/aboutus.png"
                      alt="About Learningport Foundation Trust"
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Floating quote card */}
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 border border-border max-w-[200px]">
                    <Quote className="h-4 w-4 text-primary mb-1" />
                    <p className="text-xs font-medium text-foreground leading-snug">
                      "Bridging Gaps, Building Futures"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── VISION & MISSION ──────────────────────────────── */}
          <section className="py-14 bg-muted/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-10">
                <Badge className="mb-2 bg-primary/10 text-primary text-xs">Our Purpose</Badge>
                <h2 className="text-2xl font-bold">Vision &amp; Mission</h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Vision */}
                <motion.div {...fadeUp(0.05)}>
                  <div className="bg-white rounded-2xl p-7 border border-primary/15 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold">{aboutInfo.vision_title}</h3>
                    </div>
                    <div className="space-y-3">
                      {aboutInfo.vision_content.split('\n\n').map((para, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed text-muted-foreground"
                          
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Mission */}
                <motion.div {...fadeUp(0.1)}>
                  <div className="bg-white rounded-2xl p-7 border border-accent/15 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold">{aboutInfo.mission_title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {aboutInfo.mission_points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── CORE VALUES ───────────────────────────────────── */}
          <section className="py-14 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()} className="text-center mb-10">
                <Badge className="mb-2 bg-primary/10 text-primary text-xs">Our Principles</Badge>
                <h2 className="text-2xl font-bold">Core Values</h2>
                <p
                  className="mt-2 text-sm text-muted-foreground mx-auto"
                  style={{ maxWidth: '48ch' }}
                >
                  The principles that guide every program, partnership, and decision we make.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div key={value.title} {...fadeUp(index * 0.07)}>
                      <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-sm">
                        <CardContent className="p-5 flex gap-4 items-start">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0 mt-0.5">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold mb-1">{value.title}</h3>
                            <p className="text-xs leading-relaxed text-muted-foreground" >
                              {value.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── REGISTRATION DETAILS ──────────────────────────── */}
          <section className="py-12 bg-muted/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeUp()}>
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  {/* Header strip */}
                  <div className="flex items-center gap-3 px-7 py-5 border-b border-border bg-muted/30">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Registration Details</h3>
                      <p className="text-xs text-muted-foreground">
                        Registered non-profit committed to transparency and accountability.
                      </p>
                    </div>
                  </div>

                  <div className="px-7 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Trust Registration Number', value: 'TR/BLR/2024/001234' },
                      { label: 'PAN', value: 'AAATL1234F' },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5 p-4 rounded-xl bg-muted/50">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          {item.label}
                        </span>
                        <span className="text-sm font-mono font-semibold text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CSR strip */}
                  <div className="mx-7 mb-6 p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs font-semibold text-primary mb-1">CSR Eligibility</p>
                    <p className="text-xs leading-relaxed text-muted-foreground" >
                      Learningport Foundation Trust is eligible to receive CSR funds under Section 135 of the Companies Act, 2013. We align our programs with Schedule VII activities including education, skill development, and rural development.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
