import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Cloud, Award, Users, Clock, BookOpen, TrendingUp, 
  CheckCircle, Target, Briefcase, GraduationCap, Code, Server 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function CloudComputingPage() {
  const courses = [
    {
      title: 'AWS (Amazon Web Services) Training',
      description: 'Prepare for AWS Certified Solutions Architect, SysOps Administrator, and Developer Associate certifications.',
      duration: '6–8 Weeks',
      certifications: ['AWS Certified Solutions Architect', 'AWS Developer Associate'],
      topics: ['EC2', 'S3', 'RDS', 'Lambda', 'IAM', 'VPC', 'CloudFront'],
      icon: Server,
      color: 'bg-orange-500'
    },
    {
      title: 'Microsoft Azure Training',
      description: 'Complete Azure ecosystem training covering Virtual Machines, Azure Active Directory, DevOps, and Kubernetes.',
      duration: '6–8 Weeks',
      certifications: ['Microsoft Certified: Azure Administrator', 'Azure Developer'],
      topics: ['Virtual Machines', 'Azure AD', 'Azure DevOps', 'AKS', 'Azure Functions'],
      icon: Cloud,
      color: 'bg-blue-500'
    },
    {
      title: 'Google Cloud Platform (GCP) Training',
      description: 'Prepare for GCP Associate Cloud Engineer and Professional Cloud Architect certifications.',
      duration: '6–8 Weeks',
      certifications: ['Google Associate Cloud Engineer', 'GCP Professional Cloud Architect'],
      topics: ['BigQuery', 'Cloud Storage', 'Kubernetes Engine', 'Cloud Functions', 'Compute Engine'],
      icon: Cloud,
      color: 'bg-red-500'
    },
    {
      title: 'Multi-Cloud Training Program',
      description: 'Master all three major cloud platforms (AWS + Azure + GCP) to become the most versatile cloud professional.',
      duration: '16–18 Weeks',
      certifications: ['3 Global Cloud Certifications'],
      topics: ['AWS', 'Azure', 'GCP', 'Multi-Cloud Architecture', 'Cloud Migration'],
      icon: Cloud,
      color: 'bg-purple-500'
    },
    {
      title: 'Cloud DevOps Training',
      description: 'Bridge development and cloud operations with Docker, Kubernetes, Jenkins, Terraform, and CI/CD pipelines.',
      duration: '8–10 Weeks',
      certifications: ['AWS DevOps Engineer', 'AZ-400 Azure DevOps Expert'],
      topics: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'Git', 'CI/CD'],
      icon: Code,
      color: 'bg-green-500'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Experienced Industry Trainers',
      description: 'AWS/Azure/GCP certified professionals with 8–15 years of live project experience in top MNCs.'
    },
    {
      icon: Server,
      title: 'Hands-On Lab Access (24/7)',
      description: 'Dedicated cloud sandbox environment access on AWS, Azure, and GCP. Practice anytime.'
    },
    {
      icon: Users,
      title: 'Small Batch Sizes',
      description: 'Maximum 12 students per batch for personalized attention and faster doubt resolution.'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Weekday & weekend batches available. Online live sessions for learners outside BTM Layout.'
    },
    {
      icon: Briefcase,
      title: '100% Placement Assistance',
      description: 'Resume preparation, LinkedIn optimization, mock interviews, and direct company referrals.'
    },
    {
      icon: Award,
      title: 'Official Exam Vouchers',
      description: 'Select programs include official AWS/Azure/GCP exam vouchers at no additional cost.'
    }
  ];

  const salaryData = [
    { role: 'AWS Cloud Engineer (0–2 years)', salary: '₹4.5 – ₹7 LPA' },
    { role: 'Azure Administrator', salary: '₹5 – ₹9 LPA' },
    { role: 'GCP Data Engineer', salary: '₹6 – ₹11 LPA' },
    { role: 'Cloud Architect (3–5 years)', salary: '₹12 – ₹22 LPA' },
    { role: 'DevOps Cloud Engineer', salary: '₹8 – ₹16 LPA' },
    { role: 'Multi-Cloud Specialist', salary: '₹10 – ₹20 LPA' }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner (CLF-C02)',
    'AWS Certified Solutions Architect – Associate (SAA-C03)',
    'AWS Certified Developer – Associate',
    'AWS Certified SysOps Administrator',
    'Microsoft Azure Fundamentals (AZ-900)',
    'Microsoft Azure Administrator (AZ-104)',
    'Microsoft Azure Developer (AZ-204)',
    'Microsoft Azure Solutions Architect (AZ-305)',
    'Azure DevOps Engineer Expert (AZ-400)',
    'Google Associate Cloud Engineer',
    'Google Professional Cloud Architect',
    'Google Professional Data Engineer'
  ];

  const faqs = [
    {
      question: 'What is the duration of the cloud computing course in BTM Layout?',
      answer: 'Our foundational courses range from 6 to 8 weeks for single-platform training (AWS, Azure, or GCP). The Multi-Cloud Mastery Programme is 16–18 weeks. We also offer fast-track weekend-only batches for working professionals.'
    },
    {
      question: 'Is prior programming knowledge required for cloud computing training?',
      answer: 'No. Our curriculum is designed to accommodate complete beginners. Basic computer knowledge is sufficient to get started. For the Cloud DevOps track, basic familiarity with Linux or any scripting language is helpful but not mandatory.'
    },
    {
      question: 'Does Learning Port Foundations provide placement assistance?',
      answer: 'Yes. We offer 100% placement assistance including resume building, LinkedIn profile optimization, mock interviews, and referrals to our 200+ partner companies. Our average student placement time after certification is 45–60 days.'
    },
    {
      question: 'What are the batch timings available?',
      answer: 'We offer morning batches (7–9 AM), afternoon batches (11 AM–1 PM), evening batches (6–9 PM), and weekend-only batches (Saturday & Sunday). Online live sessions are also available.'
    },
    {
      question: 'Are course fees refundable?',
      answer: 'Yes, we have a transparent refund policy. Full refund is available if requested within 48 hours of the first class. Please refer to our admission policy for complete details.'
    },
    {
      question: 'Is the training online or offline?',
      answer: 'We offer both classroom training in BTM Layout and live online instructor-led training. The curriculum, lab access, and placement support remain identical for both modes.'
    },
    {
      question: 'Which cloud platform should I learn first — AWS, Azure, or GCP?',
      answer: 'AWS currently has the largest market share (32%) and offers the widest job opportunities in Bangalore. We typically recommend starting with AWS, then adding Azure or GCP as a second certification to maximize employability. Our counselors can guide you based on your background and goals.'
    }
  ];

  const testimonials = [
    {
      name: 'Ravi S.',
      location: 'BTM Layout Batch 2024',
      text: 'I joined Learning Port Foundations\' AWS training in BTM Layout after 3 years as a manual tester. Within 4 months of completing my training and earning my AWS certification, I landed a Cloud Support Engineer role at a Bangalore-based MNC with a 90% salary hike. The hands-on labs made all the difference.'
    },
    {
      name: 'Priya M.',
      location: 'Koramangala Resident',
      text: 'The Azure training at Learning Port Foundations is structured brilliantly. The trainer had deep industry knowledge and the small batch size meant I could ask all my doubts freely. I cleared AZ-104 in my first attempt. Highly recommended for anyone in Bangalore.'
    },
    {
      name: 'Akash T.',
      location: 'Electronic City Commuter',
      text: 'I was skeptical about joining a local institute, but Learning Port Foundations completely changed my perception. The placement support is genuine — they helped me get 4 interview calls and I converted 2 of them. Now working as a GCP Engineer.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Cloud Computing Training in BTM Layout | Learning Port Foundations</title>
        <meta name="description" content="Join Learning Port Foundations for the best cloud computing training in BTM Layout. AWS, Azure & GCP courses with hands-on labs, expert trainers & 100% placement support." />
        <meta name="keywords" content="Best Cloud Computing Training in BTM Layout, Cloud Computing Course in BTM Layout, AWS Training in BTM Layout, Azure Certification Training BTM Layout, Google Cloud Training BTM Layout Bangalore" />
        <link rel="canonical" href="https://www.learningportfoundation.org/cloud-computing-training-in-btm-layout" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Cloud Computing Training in BTM Layout | Learning Port Foundations" />
        <meta property="og:description" content="Join Learning Port Foundations for the best cloud computing training in BTM Layout. AWS, Azure & GCP courses with hands-on labs, expert trainers & 100% placement support." />
        <meta property="og:url" content="https://www.learningportfoundation.org/cloud-computing-training-in-btm-layout" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Cloud Computing Training in BTM Layout | Learning Port Foundations" />
        <meta name="twitter:description" content="Join Learning Port Foundations for the best cloud computing training in BTM Layout. AWS, Azure & GCP courses with hands-on labs, expert trainers & 100% placement support." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-blue-500 text-white">Cloud Computing Training</Badge>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold">
                  Best Cloud Computing Training in BTM Layout
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                  Learn from Industry Experts at Learning Port Foundations | BTM Layout, Bangalore
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Transform into a certified cloud engineer with industry-aligned AWS, Azure, and GCP courses. 
                  Real-time projects, hands-on labs, and 100% placement assistance.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Book Free Demo Class
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Cloud Computing Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">Why Cloud Computing is the Career of the Decade</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cloud computing has completely transformed how businesses operate. From startups to Fortune 500 companies, 
                    every organization is rapidly migrating to the cloud — and the demand for skilled cloud professionals is at an all-time high.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    According to industry reports, the global cloud computing market is projected to exceed <strong>$1.2 trillion by 2028</strong>, 
                    with India alone adding over <strong>3 lakh cloud jobs annually</strong>. This makes cloud computing one of the highest-paying 
                    and fastest-growing career domains in the IT sector today.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you are living or working near BTM Layout, Jayanagar, Koramangala, Electronic City, Bannerghatta Road, or Bangalore South — 
                    now is the perfect time to upskill with Learning Port Foundations, the most recommended cloud computing institute in BTM Layout.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Courses Section */}
          <PageBanner
            title="Best Cloud Computing Training in BTM Layout"
            subtitle="Learn from industry experts. AWS, Azure & GCP courses with hands-on labs and 100% placement support."
            badge="Cloud Computing Training"
          />

          {/* Why Choose Us Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Why Choose Learning Port Foundations?</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  What makes us the best cloud computing training institute in BTM Layout
                </p>
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
                      <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
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

          {/* Salary Section */}
          <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Cloud Computing Salary in Bangalore After Certification</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Boost your earning potential with industry-recognized cloud certifications
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {salaryData.map((item, index) => (
                        <motion.div
                          key={item.role}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center space-x-3">
                            <TrendingUp className="h-5 w-5 text-green-500" />
                            <span className="font-medium">{item.role}</span>
                          </div>
                          <Badge className="bg-green-500 text-white">{item.salary}</Badge>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-6 text-center">
                      Cloud professionals with 2+ certifications earn 40–60% more than uncertified peers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Cloud Computing Certifications We Help You Crack</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Industry-recognized certifications that boost your career prospects
                </p>
              </motion.div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:shadow-md transition-all"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
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
                <h2 className="text-3xl font-bold mb-4">Real Student Success Stories</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Hear from our alumni who transformed their careers with cloud computing
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
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
                  Everything you need to know about our cloud computing training
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
          <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Enroll Now — Start Your Cloud Computing Journey</h2>
                <p className="text-lg mb-8 opacity-90">
                  Cloud technology is not the future — it is the present. Every day you delay upskilling is a missed 
                  opportunity in one of the fastest-growing career fields in India.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Join 5,000+ successful alumni from Learning Port Foundations and become a certified cloud professional 
                  in just 6–18 weeks.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Book Your FREE Demo Class Today
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-75">
                    📍 Location: BTM Layout, Bangalore – 560076<br />
                    Nearby Areas: BTM Layout Stage 1 & 2 | Jayanagar | JP Nagar | Bannerghatta Road | Koramangala | Electronic City
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

export default CloudComputingPage;
