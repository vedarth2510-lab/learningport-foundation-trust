import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Users, Target, Award, Shield, 
  CheckCircle, Briefcase, Mail, Phone, Calendar, Heart 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

function ProgramDetailPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  // Default fallbacks for custom program detail views
  const fallbacks = {
    '9': {
      name: 'Entrepreneurship Programs',
      category: 'Empowerment',
      objective: 'Business Planning, Marketing Strategies, Financial Management, Digital Tools Training, Seed Support, Micro-Enterprise Development.',
      beneficiaries: 'Aspiring entrepreneurs in rural communities',
      location: 'Karnataka',
      beneficiary_count: '150+',
      success_story: 'Supported the launch of multiple rural tailoring, food processing, and retail micro-enterprises.',
      image_url: '/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png'
    },
    '10': {
      name: 'Community Development Programs',
      category: 'Community',
      objective: 'Environmental Awareness Training, Health & Hygiene Awareness, Financial Inclusion Programs, Leadership & Community Engagement, Volunteer Development Programs.',
      beneficiaries: 'Rural villages and underserved communities',
      location: 'Karnataka',
      beneficiary_count: '3,000+',
      success_story: 'Established local self-help and development groups in 40+ villages to foster community action.',
      image_url: '/gallery/hf_20260601_205459_9504acc5-a175-49e6-a241-e64b77cfba71.png'
    },
    '11': {
      name: 'Awareness Programs',
      category: 'Awareness',
      objective: 'Child Welfare Awareness (Child Rights, Safety, Labour Prevention, Nutrition, Early Education), Environmental Awareness (Tree Plantation, Water Conservation, Waste Recycling, Climate Change, Sustainable Living), Civic & Social Responsibility (Community Leadership, Volunteerism, Rural Development, Financial Literacy, Women\'s Rights, Gender Equality).',
      beneficiaries: 'General public and rural communities',
      location: 'Across Karnataka',
      beneficiary_count: '5,000+',
      success_story: 'Conducted tree plantation and water conservation drives in multiple water-stressed blocks.',
      image_url: '/gallery/hf_20260601_205507_b036cd9c-6f8d-421d-8211-0bfb53ac5069.png'
    },
    '12': {
      name: 'Cultural Activity Programs',
      category: 'Cultural',
      objective: 'Folk Dance & Traditional Dance Programs, Music and Singing Competitions, Drama and Street Play (Nukkad Natak), Cultural Festivals, Traditional Art & Craft Workshops, Drawing & Painting, Kannada Rajyotsava Celebrations, Youth Exchange Programs.',
      beneficiaries: 'Rural youth, school and college students',
      location: 'Community centers and schools',
      beneficiary_count: '2,000+',
      success_story: 'Organized street plays to spread awareness of child rights and education opportunities in 30 government schools.',
      image_url: '/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png'
    },
    '13': {
      name: 'Health Programs',
      category: 'Healthcare',
      objective: 'Preventive Healthcare (Health Camps, Screenings, Eye/Dental check-ups), Women\'s Health (Maternal health, Menstrual hygiene, Cancer awareness), Child Health (Nutrition, Immunization, School health check-ups), Mental Health (Stress management, Counseling), Community Health (Hygiene, Clean drinking water, First aid), Nutrition Programs, Specialized Initiatives (Blood/Organ donation, Substance abuse prevention).',
      beneficiaries: 'Rural families, women, children, and senior citizens',
      location: 'Rural health camps across Karnataka',
      beneficiary_count: '4,500+',
      success_story: 'Organized health camps providing free dental, eye, and diabetes screenings for over 4,500 villagers.',
      image_url: '/gallery/hf_20260601_204855_f08b8cb7-2c54-4262-87d4-0d1c508b7cd1.png'
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/programs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        if (data && data.name) {
          setProgram(data);
        } else {
          setProgram(fallbacks[id] || null);
        }
        setLoading(false);
      })
      .catch(() => {
        setProgram(fallbacks[id] || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Not Found</h2>
          <p className="text-muted-foreground mb-6">The program you are looking for does not exist or has been removed.</p>
          <Link to="/programs">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Parse list of features/objectives from comma-separated string
  const subItems = program.objective
    ? program.objective.split(/[,•|]+/).map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <>
      <Helmet>
        <title>{`${program.name} | Learningport Foundation Trust`}</title>
        <meta name="description" content={`Learn about our ${program.name}. ${program.objective}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title={program.name}
            subtitle={`Empowering communities through our ${program.category.toLowerCase()} initiatives.`}
            badge={program.category}
          />

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <Link to="/programs" className="inline-flex items-center text-primary hover:underline font-medium">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Side: Program Overview & Sub-items */}
                <div className="lg:col-span-2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={program.image_url || program.image || 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b'}
                      alt={program.name}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-8"
                    />

                    <h2 className="text-3xl font-bold mb-4">Program Focus & Objectives</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      The primary goal of the {program.name} is to promote sustainable social change. We work closely with local volunteers, community groups, and partners to ensure maximum impact and reach.
                    </p>
                  </motion.div>

                  {subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-gray-900">Program Components</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {subItems.map((item, idx) => (
                          <Card key={idx} className="hover:shadow-md transition-shadow rounded-xl border-primary/10">
                            <CardContent className="p-4 flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm font-medium text-gray-800">{item}</span>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {program.success_story && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
                    >
                      <h3 className="text-lg font-bold text-primary mb-3">Impact & Success</h3>
                      <p className="text-lg italic text-gray-700 leading-relaxed">
                        "{program.success_story}"
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Right Side: Quick Stats & Call to Actions */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card space-y-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Quick Details</h3>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Target Beneficiaries</div>
                          <div className="text-sm font-semibold text-gray-800">{program.beneficiaries || 'Rural youth and families'}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Location</div>
                          <div className="text-sm font-semibold text-gray-800">{program.location || 'Karnataka'}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Impact Reached</div>
                          <div className="text-sm font-semibold text-gray-800">{program.beneficiary_count || '1,000+'} beneficiaries</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-accent/5 rounded-2xl p-6 border border-accent/20 space-y-4"
                  >
                    <h4 className="font-bold text-accent">Get Involved</h4>
                    <p className="text-sm text-gray-600">
                      Support this program by joining as a volunteer, partnering with us, or contributing financial support.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link to="/donate">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2">
                          <Heart className="h-4 w-4" /> Donate to this Program
                        </Button>
                      </Link>
                      <Link to="/volunteer">
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                          <Users className="h-4 w-4" /> Become a Volunteer
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProgramDetailPage;
