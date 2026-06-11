
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SuccessStoryCard from '@/components/SuccessStoryCard';

function SuccessStoriesPage() {
  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Cloud Engineer at Tech Solutions',
      photo: 'https://images.unsplash.com/photo-1620928491723-e1a4f8222181',
      testimonial: 'The cloud computing training program changed my life completely. Coming from a small village, I never imagined I would work in a top IT company. The foundation not only provided technical training but also helped me with interview preparation and soft skills.',
      impact: 'Secured a job with 6.5 LPA package within 3 months of completing the program',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Developer',
      photo: 'https://images.unsplash.com/photo-1682009562551-419cbd18091b',
      testimonial: 'I was struggling to find opportunities after my engineering degree. The skill development program at Learningport Foundation gave me practical skills and industry exposure. The placement support team worked tirelessly to help me land my dream job.',
      impact: 'Placed in a leading software company with excellent growth prospects',
    },
    {
      name: 'Lakshmi Devi',
      role: 'Entrepreneur',
      photo: 'https://images.unsplash.com/photo-1620928491723-e1a4f8222181',
      testimonial: 'The women empowerment program taught me tailoring and business management skills. With the foundation\'s support, I started my own tailoring business. Today, I employ 5 other women from my village and we are financially independent.',
      impact: 'Started a successful tailoring business employing 5 women',
    },
    {
      name: 'Arun Reddy',
      role: 'Data Analyst',
      photo: 'https://images.unsplash.com/photo-1682009562551-419cbd18091b',
      testimonial: 'The scholarship program made it possible for me to pursue higher education. Without this support, I would have had to drop out due to financial constraints. The foundation believed in me when no one else did.',
      impact: 'Completed degree with scholarship support and now working in analytics',
    },
    {
      name: 'Kavitha Naik',
      role: 'Digital Marketing Specialist',
      photo: 'https://images.unsplash.com/photo-1620928491723-e1a4f8222181',
      testimonial: 'The digital literacy program opened up a whole new world for me. I learned computer skills, social media marketing, and content creation. Now I run digital marketing campaigns for small businesses in my region.',
      impact: 'Built a successful career in digital marketing from scratch',
    },
    {
      name: 'Suresh Gowda',
      role: 'IT Support Engineer',
      photo: 'https://images.unsplash.com/photo-1682009562551-419cbd18091b',
      testimonial: 'The career guidance sessions helped me understand my strengths and choose the right career path. The mentors guided me throughout my journey, from training to placement. I am grateful for their continuous support.',
      impact: 'Successfully transitioned from agriculture to IT sector',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Success Stories - Learningport Foundation Trust</title>
        <meta name="description" content="Read inspiring success stories from students, volunteers, and beneficiaries whose lives have been transformed through our programs." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Success Stories"
            subtitle="Real stories of transformation from students and communities whose lives were changed by our programs."
            badge="Success Stories"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid"
                  >
                    <SuccessStoryCard story={story} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SuccessStoriesPage;
