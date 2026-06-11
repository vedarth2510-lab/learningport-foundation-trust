import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Compass, Users, TrendingUp, Award, Target, 
  CheckCircle, Briefcase, BookOpen, Lightbulb, MessageSquare, MapPin 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function CareerGuidancePage() {
  const programs = [
    {
      title: 'One-on-One Career Counseling',
      description: 'Personalized career guidance sessions with experienced counselors to identify your strengths and interests.',
      icon: MessageSquare,
      topics: ['Aptitude Assessment', 'Interest Mapping', 'Career Path Planning', 'Goal Setting']
    },
    {
      title: 'Industry Exposure Programs',
      description: 'Connect with industry professionals and gain insights into various career opportunities.',
      icon: Briefcase,
      topics: ['Industry Visits', 'Guest Lectures', 'Professional Networking', 'Real-World Insights']
    },
    {
      title: 'Skill Assessment & Development',
      description: 'Identify skill gaps and receive guidance on developing competencies for your chosen career.',
      icon: Target,
      topics: ['Skills Evaluation', 'Training Recommendations', 'Certification Guidance', 'Learning Roadmap']
    }
  ];

  const features = [
    {
      icon: Users,
      title: '3,421 Students Guided',
      description: 'Successfully counseled students across schools and colleges in Karnataka'
    },
    {
      icon: Compass,
      title: 'Expert Career Counselors',
      description: 'Certified counselors with 10+ years of industry and education experience'
    },
    {
      icon: Briefcase,
      title: '50+ Career Paths',
      description: 'Comprehensive guidance covering diverse career options and industries'
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Tailored guidance based on individual aptitude, interests, and goals'
    },
    {
      icon: Lightbulb,
      title: 'Industry Insights',
      description: 'Up-to-date information on job market trends and emerging opportunities'
    },
    {
      icon: Award,
      title: '88% Success Rate',
      description: 'Students report high satisfaction and successful career decisions'
    }
  ];

  const stats = [
    { number: '3,421+', label: 'Students Guided' },
    { number: '250+', label: 'Schools & Colleges' },
    { number: '88%', label: 'Success Rate' },
    { number: '50+', label: 'Career Paths' }
  ];

  const careerAreas = [
    { area: 'Engineering & Technology', icon: Target },
    { area: 'Medical & Healthcare', icon: Award },
    { area: 'Business & Management', icon: Briefcase },
    { area: 'Arts & Design', icon: Lightbulb },
    { area: 'Science & Research', icon: BookOpen },
    { area: 'Government & Civil Services', icon: Users }
  ];

  const testimonials = [
    {
      name: 'Aditya Sharma',
      role: 'Software Engineer, Infosys',
      text: 'I was confused between engineering and medicine after 12th. The career counseling session helped me understand my strengths and interests. Today, I am a happy software engineer at Infosys, doing what I love!'
    },
    {
      name: 'Sneha Reddy',
      role: 'Medical Student, KIMS',
      text: 'The aptitude tests and counseling sessions gave me clarity about my career path. The counselor helped me understand the medical field requirements and prepare accordingly. Now pursuing my dream of becoming a doctor!'
    },
    {
      name: 'Karthik Gowda',
      role: 'Civil Services Aspirant',
      text: 'Coming from a rural background, I had limited exposure to career options. The career guidance seminar opened my eyes to various possibilities. The counselor guided me towards civil services, and I am now preparing for UPSC.'
    }
  ];

  const faqs = [
    {
      question: 'Who can attend the career guidance seminars?',
      answer: 'Our seminars are open to students from classes 9-12 and college students (undergraduate and postgraduate). We also conduct special sessions for parents and teachers to help them guide students effectively.'
    },
    {
      question: 'What happens in a career counseling session?',
      answer: 'A typical session includes aptitude and interest assessments, one-on-one discussion with a counselor, exploration of suitable career options, understanding educational requirements, and creating a personalized career roadmap. Sessions last 60-90 minutes.'
    },
    {
      question: 'Is there any fee for career guidance?',
      answer: 'We offer free career guidance seminars at schools and colleges. Individual counseling sessions are available at subsidized rates for students from rural backgrounds. Group sessions are always free of cost.'
    },
    {
      question: 'How do you help students choose the right career?',
      answer: 'We use scientifically validated aptitude tests, interest inventories, and personality assessments. Combined with one-on-one counseling, we help students understand their strengths, interests, and values to make informed career decisions aligned with their goals.'
    },
    {
      question: 'Do you provide guidance for competitive exams?',
      answer: 'Yes, we provide comprehensive guidance for various competitive exams including JEE, NEET, UPSC, banking exams, and state-level entrance tests. We help students understand exam patterns, preparation strategies, and coaching options.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Career Guidance Seminars in Bangalore | Learningport Foundation Trust</title>
        <meta name="description" content="Professional career counseling and guidance for 3,421+ students. Expert counselors, aptitude assessments, and industry exposure across Karnataka schools and colleges." />
        <meta name="keywords" content="career guidance Bangalore, career counseling Karnataka, aptitude assessment students, career planning rural youth, student guidance seminars Karnataka" />
        <link rel="canonical" href="https://www.learningportfoundation.org/career-guidance-seminars" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Career Guidance Seminars in Bangalore | Learningport Foundation Trust" />
        <meta property="og:description" content="Professional career counseling and guidance for 3,421+ students. Expert counselors, aptitude assessments, and industry exposure across Karnataka schools and colleges." />
        <meta property="og:url" content="https://www.learningportfoundation.org/career-guidance-seminars" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Guidance Seminars in Bangalore | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Professional career counseling and guidance for 3,421+ students. Expert counselors, aptitude assessments, and industry exposure across Karnataka schools and colleges." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-indigo-500 text-white">Career Development</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">
                  Career Guidance Seminars
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                  Navigate Your Future with Expert Career Counseling
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Professional career guidance and counseling for students across Karnataka. 3,421+ students successfully 
                  guided with personalized counseling, aptitude assessments, and industry exposure programs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Book Counseling Session
                  </Button>
                  <Button size="lg" variant="outline">
                    Attend Free Seminar
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
                  <h2 className="text-3xl font-bold mb-6">About Our Career Guidance Programs</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Choosing the right career path is one of the most important decisions in a student's life. However, many 
                      students, especially from rural backgrounds, lack access to proper career guidance and information about 
                      diverse career opportunities available to them.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Learning Port Foundations' Career Guidance Seminars bridge this gap by providing professional counseling, 
                      aptitude assessments, and industry exposure to students across Karnataka. Our team of certified career 
                      counselors with 10+ years of experience has successfully guided 3,421+ students in making informed career 
                      decisions with an 88% success rate.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We conduct free seminars at schools and colleges, offer personalized one-on-one counseling sessions, organize 
                      industry visits, and provide comprehensive information about 50+ career paths. Our approach combines scientific 
                      assessments with personalized guidance to help each student discover their unique strengths and find the career 
                      path that aligns with their interests, aptitude, and goals.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <PageBanner
            title="Career Guidance Seminars"
            subtitle="Navigate your future with expert career counseling. 3,421+ students guided across Karnataka."
            badge="Career Development"
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
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Career Guidance?</h2>
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
                          <div className="mx-auto w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-indigo-500" />
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

          {/* Career Areas Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Career Areas We Cover</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive guidance across diverse career fields
                </p>
              </motion.div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerAreas.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.area}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-md transition-all">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-indigo-500" />
                          </div>
                          <span className="font-medium">{item.area}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
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
                <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Students who found their path through our career guidance
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
                  Everything you need to know about our career guidance services
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
          <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Find Your Perfect Career Path</h2>
                <p className="text-lg mb-8 opacity-90">
                  Don't let confusion hold you back. Get expert guidance from certified career counselors and make 
                  informed decisions about your future. Join 3,421+ students who found clarity and direction!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-indigo-500 hover:bg-white/90">
                    Book Free Counseling
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Attend Seminar
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-75">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Conducting seminars at 250+ schools and colleges across Karnataka
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

export default CareerGuidancePage;
