import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Award, Target, CheckCircle, Briefcase, BookOpen, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function WomenEmpowermentPage() {
  const programs = [
    {
      title: 'Skill Training',
      description: 'Vocational and technical skills training tailored for women entrepreneurs.',
      icon: BookOpen,
      topics: ['Tailoring & Fashion Design', 'Beauty & Wellness', 'Food Processing', 'Handicrafts']
    },
    {
      title: 'Entrepreneurship Development',
      description: 'Business planning, marketing, and management skills for starting your own venture.',
      icon: Briefcase,
      topics: ['Business Planning', 'Marketing Strategies', 'Financial Management', 'Digital Marketing']
    },
    {
      title: 'Financial Literacy',
      description: 'Understanding banking, savings, investments, and financial independence.',
      icon: TrendingUp,
      topics: ['Banking Basics', 'Savings & Investments', 'Loan Management', 'Financial Planning']
    }
  ];

  const features = [
    { icon: Users, title: '1,234 Women Empowered', description: 'Successfully trained and supported women entrepreneurs' },
    { icon: Briefcase, title: 'Business Support', description: 'Ongoing mentorship and business development assistance' },
    { icon: Award, title: 'Certification Programs', description: 'Industry-recognized certifications for skill validation' },
    { icon: Target, title: 'Market Linkages', description: 'Connect with buyers and expand your business reach' },
    { icon: Heart, title: 'Community Support', description: 'Join a network of empowered women entrepreneurs' },
    { icon: TrendingUp, title: 'Financial Independence', description: 'Achieve economic self-reliance and growth' }
  ];

  const stats = [
    { number: '1,234+', label: 'Women Trained' },
    { number: '850+', label: 'Businesses Started' },
    { number: '25+', label: 'Skill Programs' },
    { number: '100+', label: 'Villages Reached' }
  ];

  const testimonials = [
    {
      name: 'Lakshmi Devi',
      role: 'Tailoring Business Owner',
      text: 'Learning Port Foundations gave me the skills and confidence to start my own tailoring business. Today, I employ 5 other women from my village and support my family independently.'
    },
    {
      name: 'Savita Reddy',
      role: 'Beauty Salon Owner',
      text: 'The entrepreneurship training helped me understand how to run a business. I now own a successful beauty salon and have achieved financial independence.'
    },
    {
      name: 'Manjula Kumari',
      role: 'Food Processing Entrepreneur',
      text: 'From learning food processing skills to starting my own pickle business, this program transformed my life. I am now financially independent and confident.'
    }
  ];

  const faqs = [
    {
      question: 'Who can participate in the Women Empowerment programs?',
      answer: 'Our programs are open to all women from rural communities seeking economic independence, regardless of age or educational background.'
    },
    {
      question: 'Are there any fees for the training?',
      answer: 'We offer subsidized or free training for eligible women from economically disadvantaged backgrounds. Financial assistance is available.'
    },
    {
      question: 'What kind of support do you provide after training?',
      answer: 'We provide ongoing mentorship, business development support, market linkages, and access to microfinance opportunities.'
    },
    {
      question: 'How long are the training programs?',
      answer: 'Program duration varies from 1 to 6 months depending on the skill area. We offer flexible schedules to accommodate family responsibilities.'
    },
    {
      question: 'Do you help with starting a business?',
      answer: 'Yes, we provide comprehensive support including business planning, seed funding connections, market linkages, and ongoing mentorship.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Women Empowerment Programs in Karnataka | Learningport Foundation Trust</title>
        <meta name="description" content="Empowering rural women through skill training, entrepreneurship development, and financial literacy. 1,234+ women achieved economic independence across Karnataka." />
        <meta name="keywords" content="women empowerment Karnataka, skill training for women, entrepreneurship development, financial literacy rural women, women self-reliance Karnataka" />
        <link rel="canonical" href="https://www.learningportfoundation.org/women-empowerment-initiatives" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Women Empowerment Programs in Karnataka | Learningport Foundation Trust" />
        <meta property="og:description" content="Empowering rural women through skill training, entrepreneurship development, and financial literacy. 1,234+ women achieved economic independence across Karnataka." />
        <meta property="og:url" content="https://www.learningportfoundation.org/women-empowerment-initiatives" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Women Empowerment Programs in Karnataka | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Empowering rural women through skill training, entrepreneurship development, and financial literacy. 1,234+ women achieved economic independence across Karnataka." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto">
                <Badge className="mb-4 bg-pink-500 text-white">Empowerment</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">Women Empowerment Initiatives</h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">Empowering Rural Women Through Skills, Entrepreneurship & Financial Independence</p>
                <p className="text-lg leading-relaxed mb-8">Join 1,234+ women who have transformed their lives through our comprehensive empowerment programs across rural Karnataka.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">Join Our Program</Button>
                  <Button size="lg" variant="outline">Learn More</Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl font-bold mb-6">About Our Women Empowerment Programs</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Women Empowerment Initiatives are designed to break barriers and create opportunities for rural women to achieve economic independence. 
                      Through comprehensive skill training, entrepreneurship development, and financial literacy programs, we empower women to start their own businesses and become self-reliant.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With over 1,234 women successfully trained and 850+ businesses started, our programs have created a ripple effect of positive change across rural Karnataka.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <PageBanner
            title="Women Empowerment Initiatives"
            subtitle="Empowering rural women through skills, entrepreneurship & financial independence. 1,234+ women transformed."
            badge="Empowerment"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Programs?</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <Card className="h-full text-center hover:shadow-lg transition-all">
                        <CardHeader>
                          <div className="mx-auto w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-pink-500" />
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

          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
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

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              </motion.div>
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-500 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Start Your Journey to Independence</h2>
                <p className="text-lg mb-8 opacity-90">Join 1,234+ women who have transformed their lives and achieved financial independence through our programs.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-pink-500 hover:bg-white/90">Join Now</Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Contact Us</Button>
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

export default WomenEmpowermentPage;
