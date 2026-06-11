import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Users, TrendingUp, Target, 
  CheckCircle, BookOpen, Heart, DollarSign, FileText, MapPin 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function ScholarshipProgramsPage() {
  const programs = [
    {
      title: 'Merit-Based Scholarships',
      description: 'Financial support for academically excellent students from rural backgrounds.',
      icon: Award,
      topics: ['Academic Excellence Awards', 'Top Performer Scholarships', 'Subject-Specific Awards', 'Research Scholarships']
    },
    {
      title: 'Need-Based Financial Aid',
      description: 'Comprehensive financial assistance for students from economically disadvantaged families.',
      icon: Heart,
      topics: ['Full Tuition Coverage', 'Partial Fee Support', 'Book & Material Allowance', 'Living Expense Support']
    },
    {
      title: 'Higher Education Support',
      description: 'Scholarships for undergraduate and postgraduate studies in various fields.',
      icon: GraduationCap,
      topics: ['Engineering & Technology', 'Medical & Healthcare', 'Arts & Sciences', 'Professional Courses']
    }
  ];

  const features = [
    {
      icon: Users,
      title: '892 Scholarships Awarded',
      description: 'Supporting deserving students across Karnataka to achieve their dreams'
    },
    {
      icon: DollarSign,
      title: 'Up to ₹2 Lakh/Year',
      description: 'Comprehensive financial support covering tuition, books, and living expenses'
    },
    {
      icon: FileText,
      title: 'Simple Application Process',
      description: 'Easy online application with minimal documentation requirements'
    },
    {
      icon: Target,
      title: 'Merit & Need-Based',
      description: 'Scholarships available for both academic excellence and financial need'
    },
    {
      icon: BookOpen,
      title: 'Continuous Support',
      description: 'Ongoing mentorship and academic guidance throughout your education'
    },
    {
      icon: TrendingUp,
      title: '95% Success Rate',
      description: 'Scholarship recipients show exceptional academic performance and career success'
    }
  ];

  const stats = [
    { number: '892+', label: 'Scholarships Awarded' },
    { number: '₹1.2 Cr+', label: 'Total Aid Disbursed' },
    { number: '95%', label: 'Success Rate' },
    { number: '150+', label: 'Partner Institutions' }
  ];

  const eligibilityCriteria = [
    'Student from rural background in Karnataka',
    'Family income below ₹3 lakh per annum (for need-based)',
    'Minimum 75% marks in previous examination (for merit-based)',
    'Admission to recognized educational institution',
    'Age between 16-25 years',
    'Indian citizen with valid documents'
  ];

  const testimonials = [
    {
      name: 'Kavya Reddy',
      role: 'Engineering Student, RVCE',
      text: 'The scholarship from Learning Port Foundations made my engineering dream possible. Coming from a small village, I never thought I could afford a top college. Today, I am in my final year with a job offer in hand!'
    },
    {
      name: 'Suresh Kumar',
      role: 'Medical Student, KIMS',
      text: 'Without this scholarship, medical education would have remained a distant dream. The financial support covered not just my fees but also books and hostel expenses. Forever grateful to Learning Port Foundations.'
    },
    {
      name: 'Priya Gowda',
      role: 'MBA Graduate',
      text: 'The scholarship program changed my life trajectory. From a government school in rural Karnataka to an MBA from a premier institute - this journey was possible only because of their support and belief in me.'
    }
  ];

  const faqs = [
    {
      question: 'Who is eligible to apply for scholarships?',
      answer: 'Students from rural backgrounds in Karnataka with family income below ₹3 lakh per annum are eligible for need-based scholarships. Merit-based scholarships require minimum 75% marks in the previous examination. Age limit is 16-25 years.'
    },
    {
      question: 'What expenses does the scholarship cover?',
      answer: 'Depending on the scholarship type, we cover tuition fees, examination fees, books and study materials, hostel/accommodation expenses, and a monthly stipend for living expenses. Full scholarships can provide up to ₹2 lakh per year.'
    },
    {
      question: 'How do I apply for a scholarship?',
      answer: 'You can apply online through our website or visit our office in Bangalore. The application requires basic documents including income certificate, academic records, admission letter, and identity proof. Our team assists with the entire process.'
    },
    {
      question: 'When are scholarship applications accepted?',
      answer: 'We accept applications twice a year - in June-July for the academic year starting in August, and in December-January for institutions with January intake. Special scholarships are announced throughout the year.'
    },
    {
      question: 'Is the scholarship renewable every year?',
      answer: 'Yes, scholarships are renewable based on satisfactory academic performance (minimum 60% marks) and continued financial need. Students must submit renewal applications with updated documents each year.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Scholarship Programs for Rural Students | Learningport Foundation Trust</title>
        <meta name="description" content="Financial assistance for deserving students. 892+ scholarships awarded with up to ₹2 lakh/year support. Merit-based and need-based scholarships across Karnataka." />
        <meta name="keywords" content="scholarship programs Karnataka, financial aid rural students, merit scholarship Karnataka, need-based scholarship, student financial support Bangalore" />
        <link rel="canonical" href="https://www.learningportfoundation.org/scholarship-programs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Scholarship Programs for Rural Students | Learningport Foundation Trust" />
        <meta property="og:description" content="Financial assistance for deserving students. 892+ scholarships awarded with up to ₹2 lakh/year support. Merit-based and need-based scholarships across Karnataka." />
        <meta property="og:url" content="https://www.learningportfoundation.org/scholarship-programs" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scholarship Programs for Rural Students | Learningport Foundation Trust" />
        <meta name="twitter:description" content="Financial assistance for deserving students. 892+ scholarships awarded with up to ₹2 lakh/year support. Merit-based and need-based scholarships across Karnataka." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-amber-500 text-white">Financial Support</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">
                  Scholarship Programs
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                  Empowering Dreams Through Financial Assistance
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Supporting deserving students with comprehensive scholarships covering tuition, books, and living expenses. 
                  892+ scholarships awarded with ₹1.2 Crore+ total aid disbursed across Karnataka.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Apply for Scholarship
                  </Button>
                  <Button size="lg" variant="outline">
                    Check Eligibility
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
                  <h2 className="text-3xl font-bold mb-6">About Our Scholarship Programs</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At Learning Port Foundations, we believe that financial constraints should never be a barrier to quality education. 
                      Our scholarship programs are designed to support deserving students from rural backgrounds who demonstrate academic 
                      excellence or face economic hardships.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Since our inception, we have awarded 892+ scholarships totaling over ₹1.2 Crore, enabling students to pursue 
                      their dreams in engineering, medicine, arts, sciences, and professional courses. Our scholars have gone on to 
                      achieve remarkable success, with a 95% completion rate and excellent career outcomes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We offer both merit-based scholarships for academically outstanding students and need-based financial aid for 
                      those from economically disadvantaged families. Our comprehensive support covers tuition fees, books, materials, 
                      and even living expenses to ensure students can focus entirely on their education.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <PageBanner
            title="Scholarship Programs"
            subtitle="Empowering dreams through financial assistance. 892+ scholarships awarded with ₹1.2 Cr+ total aid disbursed."
            badge="Financial Support"
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
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Scholarships?</h2>
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
                          <div className="mx-auto w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-amber-500" />
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

          {/* Eligibility Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Eligibility Criteria</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Check if you qualify for our scholarship programs
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {eligibilityCriteria.map((criteria, index) => (
                        <motion.div
                          key={criteria}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 p-4 bg-background rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{criteria}</span>
                        </motion.div>
                      ))}
                    </div>
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
                <h2 className="text-3xl font-bold mb-4">Scholar Success Stories</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Hear from students whose lives were transformed by our scholarships
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
                  Everything you need to know about our scholarship programs
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
          <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Start Your Educational Journey Today</h2>
                <p className="text-lg mb-8 opacity-90">
                  Don't let financial constraints hold you back. Join 892+ students who are pursuing their dreams 
                  with our scholarship support. Applications are now open!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-amber-500 hover:bg-white/90">
                    Apply for Scholarship
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-75">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Serving students across Karnataka | Headquartered in Bangalore
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

export default ScholarshipProgramsPage;
