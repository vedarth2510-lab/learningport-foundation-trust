
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Laptop, Briefcase, BookOpen, TrendingUp, Home, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import DonationInfo from '@/components/DonationInfo';
import { Card, CardContent } from '@/components/ui/card';

function DonatePage() {
  const fundUsage = [
    { icon: GraduationCap, title: 'Education Support', description: 'Providing quality education resources and infrastructure' },
    { icon: Laptop, title: 'Skill Development', description: 'Technical and vocational training programs' },
    { icon: Users, title: 'Women Empowerment', description: 'Entrepreneurship and financial literacy programs' },
    { icon: BookOpen, title: 'Digital Literacy', description: 'Computer and internet skills training' },
    { icon: Briefcase, title: 'Career Guidance', description: 'Counseling and mentorship programs' },
    { icon: TrendingUp, title: 'Internship Assistance', description: 'Placement support and job opportunities' },
    { icon: Home, title: 'Rural Development', description: 'Community infrastructure and development' },
    { icon: Heart, title: 'Social Welfare', description: 'Healthcare and community support initiatives' },
  ];

  return (
    <>
      <Helmet>
        <title>Donate to Learningport Foundation Trust | Support Rural Youth in Bangalore</title>
        <meta name="description" content="Support rural youth education and empower communities. Help us provide cloud computing training, scholarships, and skill development to deserving students in Karnataka." />
        <meta name="keywords" content="donate NGO Bangalore, support rural education Karnataka, CSR donation Bangalore NGO, support rural students Karnataka, Learningport Foundation Trust" />
        <link rel="canonical" href="https://www.learningportfoundation.org/donate" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Donate to Learningport Foundation Trust | Support Rural Youth in Bangalore" />
        <meta property="og:description" content="Support rural youth education and empower communities. Help us provide cloud computing training, scholarships, and skill development to deserving students in Karnataka." />
        <meta property="og:url" content="https://www.learningportfoundation.org/donate" />
        <meta property="og:image" content="https://www.learningportfoundation.org/header-banner.png" />
        <meta property="og:site_name" content="Learningport Foundation Trust" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Donate to Learningport Foundation Trust | Support Rural Youth in Bangalore" />
        <meta name="twitter:description" content="Support rural youth education and empower communities. Help us provide cloud computing training, scholarships, and skill development to deserving students in Karnataka." />
        <meta name="twitter:image" content="https://www.learningportfoundation.org/header-banner.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Make a Donation"
            subtitle="Your contribution helps us provide education, training, and opportunities to deserving students. Every rupee makes a difference."
            badge="Donate"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-center mb-4">Why Your Donation Matters</h2>
                <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                  Every contribution, big or small, creates a lasting impact on the lives of rural youth. Your support enables us to provide quality education, skill training, and career opportunities to those who need it most.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {fundUsage.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-2xl">
                        <CardContent className="p-6 text-center">
                          <div className="flex justify-center mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-center mb-12">Donation Methods</h2>
                <DonationInfo />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-muted rounded-2xl p-8"
              >
                <h2 className="text-2xl font-semibold mb-6">Transparency & Accountability</h2>
                <p className="text-lg leading-relaxed mb-6">
                  We believe in complete transparency in our operations. Every donation is carefully tracked and utilized for the intended purpose. We provide regular updates on fund utilization and program outcomes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>87%</div>
                    <p className="text-sm">Directly to programs</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>8%</div>
                    <p className="text-sm">Administrative costs</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>5%</div>
                    <p className="text-sm">Fundraising expenses</p>
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

export default DonatePage;
