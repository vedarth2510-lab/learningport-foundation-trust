import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, TrendingUp, Award, Target, 
  CheckCircle, Briefcase, BookOpen, Clock, MapPin 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function SkillDevelopmentPage() {
  const courses = [
    {
      title: 'Technical Skills Training',
      description: 'Industry-relevant technical skills including programming, web development, and software testing.',
      duration: '3-6 Months',
      icon: BookOpen,
      topics: ['Programming Basics', 'Web Development', 'Software Testing', 'Database Management']
    },
    {
      title: 'Soft Skills Development',
      description: 'Communication, teamwork, leadership, and professional etiquette training.',
      duration: '2-3 Months',
      icon: Users,
      topics: ['Communication Skills', 'Team Collaboration', 'Leadership', 'Professional Etiquette']
    },
    {
      title: 'Industry Certifications',
      description: 'Preparation for industry-recognized certifications to boost employability.',
      duration: '1-3 Months',
      icon: Award,
      topics: ['IT Certifications', 'Professional Courses', 'Skill Assessments', 'Career Readiness']
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with years of practical experience'
    },
    {
      icon: Briefcase,
      title: '73% Placement Rate',
      description: 'Proven track record of successful placements in leading companies'
    },
    {
      icon: Clock,
      title: 'Flexible Schedules',
      description: 'Weekend and evening batches available for working professionals'
    },
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Assistance with industry certifications and skill assessments'
    },
    {
      icon: Target,
      title: 'Hands-On Training',
      description: 'Practical, project-based learning with real-world applications'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous support for career advancement and skill upgrades'
    }
  ];

  const stats = [
    { number: '1,247+', label: 'Students Trained' },
    { number: '73%', label: 'Placement Rate' },
    { number: '50+', label: 'Partner Companies' },
    { number: '15+', label: 'Skill Programs' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Developer',
      text: 'The skill development program at Learning Port Foundations changed my life. I went from being unemployed to landing a job at a top IT company within 4 months of completing the course.'
    },
    {
      name: 'Priya Sharma',
      role: 'Web Developer',
      text: 'The trainers are excellent and the curriculum is very practical. I learned not just technical skills but also how to present myself professionally in interviews.'
    },
    {
      name: 'Amit Patel',
      role: 'QA Engineer',
      text: 'Best decision I made was joining this program. The placement support team helped me prepare for interviews and I got multiple job offers.'
    }
  ];

  const faqs = [
    {
      question: 'Who can join the Skill Development Programs?',
      answer: 'Our programs are designed for rural youth aged 18-30 seeking career opportunities. No prior technical experience is required for most courses.'
    },
    {
      question: 'What is the duration of the programs?',
      answer: 'Program duration varies from 1 to 6 months depending on the course. We offer both intensive and extended learning options.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide comprehensive placement assistance including resume building, interview preparation, and direct connections with our 50+ partner companies.'
    },
    {
      question: 'Are there any fees for the programs?',
      answer: 'We offer subsidized training for eligible candidates from rural backgrounds. Financial assistance and scholarships are available for deserving students.'
    },
    {
      question: 'What is the placement rate?',
      answer: 'We have achieved a 73% placement rate, with most students securing jobs within 3 months of course completion.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Skill Development Programs in Bangalore | Learningport Foundation Trust</title>
        <meta name="description" content="Equip yourself with industry-relevant technical and soft skills. 1,247+ students trained with 73% placement rate. Join our skill development programs in Bangalore." />
        <meta name="keywords" content="skill development programs Bangalore, technical training Karnataka, soft skills development, career development Bangalore, placement support, rural youth training" />
        <link rel="canonical" href="https://www.learningportfoundation.org/skill-development-programs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skill Development Programs in Bangalore | Learningport Foundation Trust" />
        <meta property="og:description" content="Equip yourself with industry-relevant technical and soft skills. 1,247+ students trained with 73% placement rate. Join our skill development programs in Bangalore." />
        <meta property="og:url" content="https://www.learningportfoundation.org/skill-development-programs" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skill Development Programs in Bangalore | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Equip yourself with industry-relevant technical and soft skills. 1,247+ students trained with 73% placement rate. Join our skill development programs in Bangalore." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-blue-500 text-white">Training & Development</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">
                  Skill Development Programs
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                  Empowering Rural Youth with Industry-Relevant Skills
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Transform your career with comprehensive technical and soft skills training designed for rural youth. 
                  Join over 1,247 successful graduates who have launched their IT careers through our programs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
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
                  <h2 className="text-3xl font-bold mb-6">About Our Skill Development Programs</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Skill Development Programs are specifically designed to bridge the gap between rural youth and 
                      urban employment opportunities. We focus on equipping students with both technical and soft skills 
                      that are in high demand in today's job market.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With a proven 73% placement rate, our programs have successfully trained over 1,247 students, 
                      helping them secure positions in leading IT companies across Bangalore and beyond.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <PageBanner
            title="Skill Development Programs"
            subtitle="Empowering rural youth with industry-relevant skills. 1,247+ students trained with 73% placement rate."
            badge="Training & Development"
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
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Programs?</h2>
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
                          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-primary" />
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

          {/* Testimonials */}
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
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
          <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join over 1,247 successful graduates and start your journey towards a rewarding IT career today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
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

export default SkillDevelopmentPage;
