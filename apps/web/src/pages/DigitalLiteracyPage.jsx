import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Monitor, Wifi, Users, Award, Target, 
  CheckCircle, Smartphone, Globe, Mail, FileText, MapPin 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function DigitalLiteracyPage() {
  const programs = [
    {
      title: 'Computer Basics',
      description: 'Introduction to computers, operating systems, and essential software applications.',
      icon: Monitor,
      topics: ['Computer Fundamentals', 'Windows/Linux Basics', 'File Management', 'MS Office Suite']
    },
    {
      title: 'Internet & Digital Skills',
      description: 'Learn to navigate the internet safely and use digital tools effectively.',
      icon: Wifi,
      topics: ['Web Browsing', 'Email Communication', 'Online Safety', 'Social Media Basics']
    },
    {
      title: 'Digital Tools & Applications',
      description: 'Practical training on essential digital tools for daily life and work.',
      icon: Smartphone,
      topics: ['Mobile Apps', 'Digital Payments', 'Government Services', 'Online Forms']
    }
  ];

  const features = [
    {
      icon: Users,
      title: '1,567 Individuals Trained',
      description: 'Successfully trained rural community members in digital literacy'
    },
    {
      icon: Monitor,
      title: 'Hands-On Training',
      description: 'Practical, interactive sessions with individual computer access'
    },
    {
      icon: Award,
      title: 'Certification Provided',
      description: 'Recognized digital literacy certificates upon course completion'
    },
    {
      icon: Target,
      title: 'Customized Curriculum',
      description: 'Training adapted to different age groups and learning speeds'
    },
    {
      icon: Globe,
      title: 'Community Centers',
      description: 'Training conducted at accessible locations in rural areas'
    },
    {
      icon: FileText,
      title: 'Free Study Materials',
      description: 'Comprehensive learning materials in local languages'
    }
  ];

  const stats = [
    { number: '1,567+', label: 'People Trained' },
    { number: '45+', label: 'Community Centers' },
    { number: '92%', label: 'Completion Rate' },
    { number: '3', label: 'Languages Offered' }
  ];

  const skillsLearned = [
    { skill: 'Basic Computer Operations', icon: Monitor },
    { skill: 'Internet Browsing & Search', icon: Globe },
    { skill: 'Email & Communication', icon: Mail },
    { skill: 'Digital Payments (UPI, Banking)', icon: Smartphone },
    { skill: 'Government Online Services', icon: FileText },
    { skill: 'Social Media Usage', icon: Users }
  ];

  const testimonials = [
    {
      name: 'Gangamma',
      role: 'Self-Help Group Member',
      text: 'At 52, I never thought I would learn computers. The trainers were so patient and taught everything in Kannada. Now I can check my bank balance, make UPI payments, and even video call my children in the city!'
    },
    {
      name: 'Ravi Kumar',
      role: 'Small Business Owner',
      text: 'Digital literacy training helped me take my small grocery business online. I learned to use WhatsApp for orders, accept digital payments, and even created a Facebook page for my shop. Sales have increased by 40%!'
    },
    {
      name: 'Lakshmi Devi',
      role: 'Anganwadi Worker',
      text: 'Learning computer basics and internet skills has made my work so much easier. I can now fill online forms, send reports via email, and access government portals without depending on others. Very empowering!'
    }
  ];

  const faqs = [
    {
      question: 'Who can join the Digital Literacy programs?',
      answer: 'Our programs are open to everyone aged 15 and above, regardless of educational background. We especially focus on rural community members, women, senior citizens, and small business owners who want to learn basic computer and internet skills.'
    },
    {
      question: 'Do I need any prior computer knowledge?',
      answer: 'No prior knowledge is required. Our courses start from absolute basics and progress gradually. We teach everything from how to use a mouse and keyboard to browsing the internet and using digital applications.'
    },
    {
      question: 'What is the duration of the training?',
      answer: 'The basic digital literacy course is 6-8 weeks with classes held 3 times per week (2 hours each). We also offer intensive weekend batches and flexible timings for working individuals.'
    },
    {
      question: 'Is the training available in local languages?',
      answer: 'Yes! We conduct training in Kannada, Hindi, and English. All study materials and instructions are provided in the language you are comfortable with.'
    },
    {
      question: 'Are there any fees for the program?',
      answer: 'The training is completely free for rural community members. We also provide free access to computers during the training period. Our goal is to make digital literacy accessible to everyone.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Literacy Programs in Rural Karnataka | Learningport Foundation Trust</title>
        <meta name="description" content="Free basic computer and internet skills training for rural communities. 1,567+ individuals trained across 45+ community centres in Kannada, Hindi and English." />
        <meta name="keywords" content="digital literacy rural Karnataka, free computer training Karnataka, internet skills rural communities, basic computer course Kannada, digital skills rural India" />
        <link rel="canonical" href="https://www.learningportfoundation.org/digital-literacy-programs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Literacy Programs in Rural Karnataka | Learningport Foundation Trust" />
        <meta property="og:description" content="Free basic computer and internet skills training for rural communities. 1,567+ individuals trained across 45+ community centres in Kannada, Hindi and English." />
        <meta property="og:url" content="https://www.learningportfoundation.org/digital-literacy-programs" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Literacy Programs in Rural Karnataka | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Free basic computer and internet skills training for rural communities. 1,567+ individuals trained across 45+ community centres in Kannada, Hindi and English." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-cyan-500 text-white">Digital Empowerment</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">
                  Digital Literacy Programs
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                  Bridging the Digital Divide in Rural Communities
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Empowering rural communities with essential computer and internet skills. 1,567+ individuals trained 
                  across 45+ community centers in Karnataka with free training in local languages.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Join Free Training
                  </Button>
                  <Button size="lg" variant="outline">
                    Find Nearest Center
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
                  <h2 className="text-3xl font-bold mb-6">About Our Digital Literacy Programs</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In today's digital age, basic computer and internet skills are no longer optional—they are essential 
                      for accessing government services, banking, education, healthcare, and employment opportunities. However, 
                      rural communities often lack access to quality digital literacy training.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Learning Port Foundations' Digital Literacy Programs are designed to bridge this digital divide. We have 
                      successfully trained 1,567+ individuals across 45+ community centers in rural Karnataka, with a remarkable 
                      92% completion rate. Our training is completely free and conducted in local languages to ensure accessibility.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      From learning basic computer operations to using digital payment systems and accessing government services 
                      online, our comprehensive curriculum empowers rural community members to confidently navigate the digital world. 
                      We provide hands-on training with individual computer access, patient instructors, and practical real-world applications.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <PageBanner
            title="Digital Literacy Programs"
            subtitle="Bridging the digital divide in rural communities. 1,567+ individuals trained across 45+ community centres."
            badge="Digital Empowerment"
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
                          <div className="mx-auto w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-cyan-500" />
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

          {/* Skills Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Skills You Will Learn</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Practical digital skills for everyday life and work
                </p>
              </motion.div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsLearned.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-md transition-all">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-cyan-500" />
                          </div>
                          <span className="font-medium">{item.skill}</span>
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
                  Real stories from people who transformed their lives through digital literacy
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
                  Everything you need to know about our digital literacy programs
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
          <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Start Your Digital Journey Today</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join 1,567+ individuals who have gained confidence and independence through digital literacy. 
                  Free training in your local language at a community center near you!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-cyan-500 hover:bg-white/90">
                    Enroll Now - It's Free!
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Find Nearest Center
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-75">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    45+ Community Centers across rural Karnataka | Training in Kannada, Hindi & English
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

export default DigitalLiteracyPage;
