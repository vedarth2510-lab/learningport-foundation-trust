import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, TrendingUp, Award, Target, 
  CheckCircle, Building, FileText, UserCheck, Handshake, MapPin 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function InternshipPlacementPage() {
  const programs = [
    {
      title: 'Internship Programs',
      description: 'Connect with leading companies for meaningful internship opportunities across various domains.',
      icon: Briefcase,
      topics: ['Summer Internships', 'Project-Based Learning', 'Industry Exposure', 'Stipend Opportunities']
    },
    {
      title: 'Job Placement Support',
      description: 'End-to-end placement assistance from resume building to final offer negotiation.',
      icon: Building,
      topics: ['Campus Placements', 'Off-Campus Opportunities', 'Startup Connections', 'MNC Placements']
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive training to ace technical and HR interviews with confidence.',
      icon: UserCheck,
      topics: ['Mock Interviews', 'Technical Prep', 'Soft Skills Training', 'Group Discussions']
    }
  ];

  const features = [
    {
      icon: Users,
      title: '1,089 Placements Facilitated',
      description: 'Successfully placed students in leading companies across India'
    },
    {
      icon: Building,
      title: '200+ Partner Companies',
      description: 'Strong network with startups, MNCs, and government organizations'
    },
    {
      icon: TrendingUp,
      title: 'Average Package: ₹4.5 LPA',
      description: 'Competitive salary packages with top performers earning up to ₹12 LPA'
    },
    {
      icon: Award,
      title: '85% Placement Rate',
      description: 'Consistently high placement success across all programs'
    },
    {
      icon: FileText,
      title: 'Resume & Profile Building',
      description: 'Professional resume writing and LinkedIn profile optimization'
    },
    {
      icon: Handshake,
      title: 'Lifetime Support',
      description: 'Ongoing career support even after placement for growth opportunities'
    }
  ];

  const stats = [
    { number: '1,089+', label: 'Placements' },
    { number: '200+', label: 'Partner Companies' },
    { number: '85%', label: 'Placement Rate' },
    { number: '₹4.5 LPA', label: 'Avg. Package' }
  ];

  const partnerCompanies = [
    'Infosys', 'Wipro', 'TCS', 'Accenture', 'Cognizant', 'Tech Mahindra',
    'Amazon', 'Flipkart', 'Swiggy', 'Zomato', 'Razorpay', 'Freshworks',
    'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Deloitte', 'EY', 'KPMG'
  ];

  const testimonials = [
    {
      name: 'Rahul Verma',
      role: 'Software Engineer, Infosys',
      text: 'The placement support team at Learning Port Foundations was incredible. From resume building to mock interviews, they prepared me thoroughly. I received 3 job offers and chose Infosys with a ₹5.2 LPA package!'
    },
    {
      name: 'Divya Krishnan',
      role: 'Business Analyst, Accenture',
      text: 'Coming from a rural background, I had no idea how to approach placements. The team guided me at every step - resume, aptitude tests, interviews. Today I am working at Accenture, earning well and supporting my family.'
    },
    {
      name: 'Suresh Kumar',
      role: 'Data Analyst, Amazon',
      text: 'The internship program gave me real industry experience which was crucial for my final placement. The mock interviews and technical preparation sessions were game-changers. Grateful to be working at Amazon now!'
    }
  ];

  const faqs = [
    {
      question: 'Who is eligible for internship and placement support?',
      answer: 'Students in their final year of graduation or postgraduation from any stream are eligible. We also support recent graduates (within 2 years of graduation) who are seeking employment opportunities. Priority is given to students from rural backgrounds.'
    },
    {
      question: 'What kind of companies do you connect students with?',
      answer: 'We have partnerships with 200+ companies including IT giants (Infosys, TCS, Wipro), MNCs (Accenture, Cognizant), startups (Swiggy, Razorpay), banks (HDFC, ICICI), and consulting firms (Deloitte, EY). Opportunities span across IT, finance, consulting, operations, and more.'
    },
    {
      question: 'How do you prepare students for interviews?',
      answer: 'Our comprehensive preparation includes: resume building workshops, aptitude and technical test practice, mock interviews (technical and HR), group discussion training, soft skills development, and company-specific preparation. We conduct multiple mock sessions until students are confident.'
    },
    {
      question: 'What is the average salary package for placed students?',
      answer: 'The average package is ₹4.5 LPA. Entry-level positions typically range from ₹3-6 LPA, while top performers secure packages of ₹8-12 LPA. Packages vary based on company, role, and candidate profile.'
    },
    {
      question: 'Is there any fee for placement support?',
      answer: 'We offer free placement support to eligible students from rural backgrounds. This includes resume building, interview preparation, company connections, and follow-up support. Our mission is to ensure financial constraints don\'t hinder career opportunities.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Internship &amp; Placement Support in Bangalore | Learningport Foundation Trust</title>
        <meta name="description" content="Connect with 200+ hiring companies. 1,089+ placements facilitated. 85% placement rate with average package of ₹4.5 LPA. Free placement support for rural students." />
        <meta name="keywords" content="internship placement Bangalore, job placement support Karnataka, campus recruitment Bangalore, placement assistance rural students, hiring companies Bangalore" />
        <link rel="canonical" href="https://www.learningportfoundation.org/internship-placement-support" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Internship &amp; Placement Support in Bangalore | Learningport Foundation Trust" />
        <meta property="og:description" content="Connect with 200+ hiring companies. 1,089+ placements facilitated. 85% placement rate with average package of ₹4.5 LPA. Free placement support for rural students." />
        <meta property="og:url" content="https://www.learningportfoundation.org/internship-placement-support" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internship &amp; Placement Support in Bangalore | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Connect with 200+ hiring companies. 1,089+ placements facilitated. 85% placement rate with average package of ₹4.5 LPA. Free placement support for rural students." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-emerald-500 text-white">Career Placement</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">
                  Internship & Placement Support
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                  Connecting Students with Career Opportunities
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Comprehensive placement support connecting students with leading companies. 1,089+ successful placements 
                  with 200+ partner companies across Bangalore and major cities. Average package: ₹4.5 LPA.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Register for Placement
                  </Button>
                  <Button size="lg" variant="outline">
                    View Job Openings
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6">About Our Placement Support Program</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Landing the right job or internship is crucial for launching a successful career. However, students from 
                      rural backgrounds often face challenges in accessing quality placement opportunities due to limited industry 
                      connections, lack of interview preparation, and inadequate guidance on the recruitment process.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Learning Port Foundations' Internship & Placement Support program bridges this gap by providing end-to-end 
                      placement assistance. With a strong network of 200+ partner companies including IT giants, MNCs, startups, 
                      banks, and consulting firms, we have successfully facilitated 1,089+ placements with an impressive 85% 
                      placement rate.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our comprehensive support includes professional resume building, LinkedIn profile optimization, aptitude and 
                      technical test preparation, mock interviews, soft skills training, company connections, and offer negotiation 
                      guidance. We don't just help you get a job—we prepare you to excel in your career. Our placed students earn 
                      an average package of ₹4.5 LPA, with top performers securing offers up to ₹12 LPA.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <PageBanner
            title="Internship & Placement Support"
            subtitle="Connecting students with career opportunities. 1,089+ placements with 200+ partner companies."
            badge="Career Placement"
          />

          {/* Features Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Placement Support?</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full text-center hover:shadow-lg transition-all">
                        <CardHeader>
                          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-emerald-500" />
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Partner Companies Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Our Partner Companies</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Strong network with 200+ leading companies across industries
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                      {partnerCompanies.map((company, index) => (
                        <motion.div
                          key={company}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-md transition-all"
                        >
                          <span className="text-sm font-medium text-center">{company}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-8">
                      ...and 180+ more companies across IT, Finance, Consulting, and other sectors
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Placement Success Stories</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Students who launched successful careers through our placement support
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center space-x-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Award key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                        </div>
                        <div className="border-t pt-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to know about our placement support
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Launch Your Career Today</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join 1,089+ students who successfully launched their careers through our placement support. 
                  Get connected with 200+ leading companies and start your professional journey with confidence!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/register-placement">
                    <Button size="lg" variant="secondary" className="bg-white text-emerald-500 hover:bg-white/90">
                      Register for Placement
                    </Button>
                  </Link>
                  <Link to="/schedule-counseling">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Schedule Counseling
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-75">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Placement support across Bangalore, Mysore, Mangalore, and major cities in Karnataka
                  </p>
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

export default InternshipPlacementPage;
