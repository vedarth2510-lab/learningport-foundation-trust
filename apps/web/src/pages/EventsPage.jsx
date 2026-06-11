
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import EventsList from '@/components/EventsList';

function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 'event-1',
      name: 'Cloud Computing Workshop',
      type: 'Workshop',
      description: 'Hands-on workshop on AWS cloud services and deployment strategies',
      date: 'June 15, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Learningport Training Center, Bangalore',
    },
    {
      id: 'event-2',
      name: 'Women Entrepreneurship Seminar',
      type: 'Seminar',
      description: 'Inspiring session on starting and scaling small businesses for rural women',
      date: 'June 22, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Community Hall, Rural Karnataka',
    },
    {
      id: 'event-3',
      name: 'Blood Donation Camp',
      type: 'Community Service',
      description: 'Annual blood donation drive in partnership with local hospitals',
      date: 'June 28, 2026',
      time: '9:00 AM - 3:00 PM',
      location: 'Foundation Campus, Bangalore',
    },
    {
      id: 'event-4',
      name: 'Digital Literacy Training Batch',
      type: 'Training',
      description: 'New batch for basic computer skills and internet literacy',
      date: 'July 5, 2026',
      time: 'Ongoing - 3 months',
      location: 'Multiple Rural Centers',
    },
    {
      id: 'event-5',
      name: 'Career Guidance Session',
      type: 'Seminar',
      description: 'Interactive session on career opportunities in IT and technology',
      date: 'July 12, 2026',
      time: '11:00 AM - 1:00 PM',
      location: 'Government College, Bangalore Rural',
    },
    {
      id: 'event-6',
      name: 'Skill Development Awareness Campaign',
      type: 'Campaign',
      description: 'Community outreach program to promote skill development initiatives',
      date: 'July 20, 2026',
      time: 'Full Day',
      location: 'Multiple Villages in Karnataka',
    },
  ]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setUpcomingEvents(data.map(item => ({
            id: String(item.id),
            name: item.title,
            type: item.type || 'Activity',
            description: item.description,
            date: new Date(item.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            time: item.event_time,
            location: item.venue,
          })));
        }
      })
      .catch(err => console.log('Events API error, using fallback', err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Events - Learningport Foundation Trust</title>
        <meta name="description" content="Explore upcoming workshops, seminars, training programs, and community events organized by Learningport Foundation Trust." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Events & Activities"
            subtitle="Stay updated with our upcoming events, workshops, seminars, and community programs."
            badge="Events"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <EventsList events={upcomingEvents} />
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default EventsPage;
