
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, Building2, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import VolunteerForm from '@/components/VolunteerForm';
import { Card, CardContent } from '@/components/ui/card';

function VolunteerPage() {
  const opportunities = [
    {
      icon: GraduationCap,
      title: 'Teaching & Training',
      description: 'Share your knowledge by conducting workshops and training sessions for students',
    },
    {
      icon: Users,
      title: 'Student Mentoring',
      description: 'Guide and mentor students in their academic and career journey',
    },
    {
      icon: Briefcase,
      title: 'Internship Opportunities',
      description: 'Gain hands-on experience while contributing to social impact projects',
    },
    {
      icon: Building2,
      title: 'CSR Volunteering',
      description: 'Corporate employees can participate in our CSR volunteering programs',
    },
    {
      icon: Heart,
      title: 'College Collaboration',
      description: 'Student clubs and organizations can partner with us for community service',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Volunteer - Learningport Foundation Trust</title>
        <meta name="description" content="Join our volunteer program and make a difference in the lives of rural youth. Opportunities for teaching, mentoring, internships, and CSR volunteering available." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Volunteer With Us"
            subtitle="Share your skills and expertise to mentor students, conduct workshops, or support our programs in meaningful ways."
            badge="Volunteer"
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
                <h2 className="text-center mb-4">Why Volunteer?</h2>
                <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                  Volunteering with Learningport Foundation Trust is more than just giving your time—it's about creating meaningful impact, developing new skills, and being part of a community dedicated to social change.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities.map((opportunity, index) => (
                    <motion.div
                      key={opportunity.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-2xl">
                        <CardContent className="p-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                            <opportunity.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{opportunity.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{opportunity.description}</p>
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
                <div className="bg-muted rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold mb-6">Impact of Volunteering</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>347</div>
                      <p className="text-sm">Active Volunteers</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>1,247</div>
                      <p className="text-sm">Students Mentored</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>89</div>
                      <p className="text-sm">Workshops Conducted</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-center mb-8">Volunteer Registration</h2>
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <VolunteerForm />
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

export default VolunteerPage;
