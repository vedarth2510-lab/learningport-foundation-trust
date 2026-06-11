
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

function ContactPage() {
  const [contactData, setContactData] = useState({
    phone: '+91 7795118447',
    email: 'learningportfoundationtrust@gmail.com',
    address: '65/36, 11th Main Rd, near Ganesh Temple, KEB Colony, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka - 560029',
    map_embed_url: '',
    facebook_url: '#',
    twitter_url: '#',
    instagram_url: '#',
    linkedin_url: '#'
  });

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => {
        if (data && data.phone) {
          setContactData({
            phone: data.phone,
            email: data.email,
            address: data.address || `${data.city}, ${data.state}, India`,
            map_embed_url: data.map_embed_url || '',
            facebook_url: data.facebook_url || '#',
            twitter_url: data.twitter_url || '#',
            instagram_url: data.instagram_url || '#',
            linkedin_url: data.linkedin_url || '#'
          });
        }
      })
      .catch(err => console.log('Contact API error, using default', err));
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: contactData.phone,
      link: `tel:${contactData.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: Mail,
      title: 'Email',
      details: contactData.email,
      link: `mailto:${contactData.email}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      details: contactData.address,
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: contactData.facebook_url, label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Twitter, href: contactData.twitter_url, label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: Instagram, href: contactData.instagram_url, label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: Linkedin, href: contactData.linkedin_url, label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
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
                <div className="bg-muted rounded-2xl overflow-hidden shadow-md" style={{ height: '400px' }}>
                  {contactData.map_embed_url ? (
                    <iframe
                      title="Google Maps"
                      src={contactData.map_embed_url}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-muted-foreground">Google Maps integration will be displayed here</p>
                    </div>
                  )}
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
