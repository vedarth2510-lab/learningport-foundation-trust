
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, GraduationCap, TrendingUp, FileText, Building2, Award, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function CSRPartnershipPage() {
  const sdgGoals = [
    { number: 4, title: 'Quality Education', description: 'Ensuring inclusive and equitable quality education' },
    { number: 5, title: 'Gender Equality', description: 'Achieving gender equality and empowering women' },
    { number: 8, title: 'Decent Work', description: 'Promoting sustained economic growth and employment' },
    { number: 10, title: 'Reduced Inequalities', description: 'Reducing inequality within and among communities' },
  ];

  const supportAreas = [
    { icon: GraduationCap, title: 'Education Infrastructure', description: 'Support building learning centers and providing educational resources' },
    { icon: Users, title: 'Skill Development', description: 'Fund vocational training programs and certification courses' },
    { icon: TrendingUp, title: 'Women Empowerment', description: 'Support entrepreneurship and financial literacy programs' },
    { icon: Building2, title: 'Rural Development', description: 'Contribute to community infrastructure and development projects' },
  ];

  const benefits = [
    'Align with UN Sustainable Development Goals',
    'Measurable social impact with detailed reports',
    'Brand visibility through joint initiatives',
    'Employee engagement opportunities',
    'Quarterly impact assessment reports',
    'Dedicated impact reporting and documentation',
  ];

  return (
    <>
      <Helmet>
        <title>CSR Partnership - Learningport Foundation Trust</title>
        <meta name="description" content="Partner with us for CSR initiatives aligned with SDG goals. Support education, skill development, women empowerment, and rural development programs." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="CSR Partnership"
            subtitle="Partner with us to fulfil your CSR obligations while creating real, measurable social impact in rural Karnataka."
            badge="CSR"
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
                <h2 className="text-center mb-4">SDG Alignment</h2>
                <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                  Our programs are strategically aligned with United Nations Sustainable Development Goals, ensuring your CSR investment creates global impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sdgGoals.map((goal, index) => (
                    <motion.div
                      key={goal.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                        <CardContent className="p-6 text-center">
                          <div className="text-5xl font-bold text-primary mb-3" style={{ fontVariantNumeric: 'tabular-nums' }}>
                            {goal.number}
                          </div>
                          <h3 className="text-base font-semibold mb-2">{goal.title}</h3>
                          <p className="text-sm text-muted-foreground">{goal.description}</p>
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
                <h2 className="text-center mb-12">Areas of Support</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {supportAreas.map((area, index) => (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-2xl">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                              <area.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                              <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                            </div>
                          </div>
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
                  <h2 className="text-2xl font-semibold mb-6">Partnership Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">CSR Eligibility</h2>
                      <p className="text-lg leading-relaxed mb-4">
                        Learningport Foundation Trust is eligible to receive CSR funds under Section 135 of the Companies Act, 2013. Our programs align with Schedule VII activities including:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Promoting education and skill development</li>
                        <li>• Promoting gender equality and empowering women</li>
                        <li>• Rural development projects</li>
                        <li>• Livelihood enhancement projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="mb-6">Ready to Partner?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Download our CSR proposal or get in touch with our team to discuss how we can create impact together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]">
                    <FileText className="mr-2 h-5 w-5" />
                    Download CSR Proposal
                  </Button>
                  <Button size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
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

export default CSRPartnershipPage;
