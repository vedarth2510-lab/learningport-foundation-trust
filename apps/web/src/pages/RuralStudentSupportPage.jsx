import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, CheckCircle, GraduationCap, Heart, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function RuralStudentSupportPage() {
  const programs = [
    {
      title: 'Educational Resources',
      description: 'Books, study materials, and digital learning resources for students.',
      icon: BookOpen,
      topics: ['Textbooks & Reference Books', 'Digital Learning Materials', 'Study Guides', 'Online Resources']
    },
    {
      title: 'Mentoring Programs',
      description: 'One-on-one mentoring and group guidance sessions with experienced professionals.',
      icon: Users,
      topics: ['Academic Mentoring', 'Career Guidance', 'Personal Development', 'Peer Learning Groups']
    },
    {
      title: 'Exam Preparation',
      description: 'Coaching and preparation support for competitive exams and board examinations.',
      icon: GraduationCap,
      topics: ['Competitive Exam Coaching', 'Board Exam Preparation', 'Mock Tests', 'Study Strategies']
    }
  ];

  const features = [
    { icon: Users, title: '2,847 Students Supported', description: 'Comprehensive support to rural students across Karnataka' },
    { icon: BookOpen, title: 'Free Study Materials', description: 'Access to quality educational resources at no cost' },
    { icon: Award, title: 'Expert Mentors', description: 'Guidance from experienced educators and professionals' },
    { icon: Target, title: 'Personalized Support', description: 'Tailored assistance based on individual student needs' },
    { icon: Heart, title: 'Holistic Development', description: 'Focus on academic and personal growth' },
    { icon: Lightbulb, title: 'Career Counseling', description: 'Help students make informed career decisions' }
  ];

  const stats = [
    { number: '2,847+', label: 'Students Supported' },
    { number: '150+', label: 'Schools Reached' },
    { number: '85%', label: 'Academic Improvement' },
    { number: '50+', label: 'Mentors' }
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Engineering Student',
      text: 'The mentoring program helped me understand my strengths and choose the right career path. Today I am pursuing engineering at a top college.'
    },
    {
      name: 'Anita Reddy',
      role: 'Medical Student',
      text: 'Without the study materials and guidance from Learning Port Foundations, I would not have been able to crack the medical entrance exam. Forever grateful!'
    },
    {
      name: 'Suresh Gowda',
      role: 'College Graduate',
      text: 'The continuous support throughout my education journey made all the difference. From books to career counseling, they were always there.'
    }
  ];

  const faqs = [
    {
      question: 'Who is eligible for the Rural Student Support program?',
      answer: 'Students from government schools and rural colleges across Karnataka are eligible. We focus on supporting students from economically disadvantaged backgrounds.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide educational resources, mentoring, exam preparation support, career counseling, and access to digital learning platforms.'
    },
    {
      question: 'Is there any cost for the support services?',
      answer: 'No, all our support services are provided free of cost to eligible students from rural backgrounds.'
    },
    {
      question: 'How can students apply for the program?',
      answer: 'Students can apply through their schools or directly contact us. We also conduct outreach programs in rural areas to identify and support deserving students.'
    },
    {
      question: 'Do you provide support for competitive exams?',
      answer: 'Yes, we provide coaching and preparation support for various competitive exams including JEE, NEET, banking exams, and civil services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Rural Student Support Programs | Learningport Foundation Trust</title>
        <meta name="description" content="Educational support, mentoring, and resources for 2,847+ rural students. Free study materials, expert guidance, and career counseling across Karnataka." />
        <meta name="keywords" content="rural student support Karnataka, free education rural students, student mentoring Karnataka, career counseling rural youth, educational resources Karnataka" />
        <link rel="canonical" href="https://www.learningportfoundation.org/rural-student-support" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rural Student Support Programs | Learningport Foundation Trust" />
        <meta property="og:description" content="Educational support, mentoring, and resources for 2,847+ rural students. Free study materials, expert guidance, and career counseling across Karnataka." />
        <meta property="og:url" content="https://www.learningportfoundation.org/rural-student-support" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rural Student Support Programs | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Educational support, mentoring, and resources for 2,847+ rural students. Free study materials, expert guidance, and career counseling across Karnataka." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto">
                <Badge className="mb-4 bg-green-500 text-white">Education Support</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">Rural Student Support</h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">Empowering Rural Students Through Education & Mentorship</p>
                <p className="text-lg leading-relaxed mb-8">Comprehensive support for 2,847+ students from government schools and rural colleges across Karnataka.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">Apply for Support</Button>
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
                  <h2 className="text-3xl font-bold mb-6">About Our Rural Student Support Program</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Rural Student Support program is dedicated to breaking educational barriers and providing equal opportunities to students from rural backgrounds. 
                      We believe every student deserves access to quality education, mentoring, and resources regardless of their economic status.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With support provided to over 2,847 students and an 85% academic improvement rate, we are making a real difference in rural education across Karnataka.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <PageBanner
            title="Rural Student Support"
            subtitle="Empowering rural students through education and mentorship. 2,847+ students supported across Karnataka."
            badge="Education Support"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Program?</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <Card className="h-full text-center hover:shadow-lg transition-all">
                        <CardHeader>
                          <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-green-500" />
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

          <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Get the Support You Deserve</h2>
                <p className="text-lg mb-8 opacity-90">Join 2,847+ students who are achieving their academic dreams with our comprehensive support programs.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">Apply Now</Button>
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

export default RuralStudentSupportPage;
