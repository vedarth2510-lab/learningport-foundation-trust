
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9742854447',
      link: 'tel:+919742854447',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'enquiry@learningportfoundation.org',
      link: 'mailto:enquiry@learningportfoundation.org',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Bangalore, Karnataka, India',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Learningport Foundation Trust</title>
        <meta name="description" content="Get in touch with Learningport Foundation Trust. Contact us for inquiries, partnerships, volunteering opportunities, or support." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Contact Us"
            subtitle="Get in touch with our team. We're here to answer your questions and guide you."
            badge="Contact"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-8">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info) => (
                      <Card key={info.title} className="hover:shadow-lg transition-all duration-300 rounded-2xl">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                              >
                                {info.details}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${social.color}`}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-8">Send Us a Message</h2>
                  <div className="bg-card rounded-2xl p-8 shadow-lg">
                    <ContactForm />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-center mb-8">Find Us</h2>
                <div className="bg-muted rounded-2xl overflow-hidden" style={{ height: '400px' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Google Maps integration will be displayed here</p>
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

export default ContactPage;
