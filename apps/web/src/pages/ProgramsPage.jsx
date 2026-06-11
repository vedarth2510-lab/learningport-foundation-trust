
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ProgramCard from '@/components/ProgramCard';

function ProgramsPage() {
  const defaultPrograms = [
    {
      name: 'Skill Development Programs',
      category: 'Training',
      objective: 'Computer Basics (MS Office, Internet, Email), Spoken English & Communication Skills, Personality Development, Soft Skills Training, Interview Prep & Resume Building, Career Guidance & Counseling.',
      beneficiaries: 'Rural youth aged 18-30 seeking career opportunities',
      location: 'Bangalore and surrounding rural districts',
      beneficiaryCount: '1,247+',
      image: '/gallery/hf_20260601_204809_88d0a42f-078c-4640-bb95-84e66b0884ea.png',
      successStory: 'Trained over 1,200 students in various technical skills with 73% placement rate',
      path: '/skill-development-programs'
    },
    {
      name: 'Cloud Computing Training',
      category: 'Technology',
      objective: 'Provide comprehensive training in cloud technologies (AWS, Azure, Google Cloud) to prepare students for IT careers',
      beneficiaries: 'Engineering graduates and diploma holders from rural areas',
      location: 'BTM Layout, Bangalore',
      beneficiaryCount: '487+',
      image: '/gallery/hf_20260601_204820_8556f38f-a28c-4ea4-a23d-35294054a3e5.png',
      path: '/cloud-computing-training-in-btm-layout'
    },
    {
      name: 'Women Empowerment Initiatives',
      category: 'Empowerment',
      objective: 'Empower rural women through skill training, entrepreneurship development, and financial literacy.',
      beneficiaries: 'Women from rural communities seeking economic independence',
      location: 'Rural villages across Karnataka',
      beneficiaryCount: '1,234+',
      image: '/gallery/hf_20260601_204855_f08b8cb7-2c54-4262-87d4-0d1c508b7cd1.png',
      path: '/women-empowerment-initiatives'
    },
    {
      name: 'Rural Student Support',
      category: 'Education',
      objective: 'Provide educational support, mentoring, and resources to students from rural backgrounds.',
      beneficiaries: 'Students from government schools and rural colleges',
      location: 'Rural schools and colleges in Karnataka',
      beneficiaryCount: '2,847+',
      image: '/gallery/hf_20260601_205027_867d3526-e3d6-48ff-be1c-06ef19e2f6a5.png',
      path: '/rural-student-support'
    },
    {
      name: 'Scholarship Programs',
      category: 'Financial Aid',
      objective: 'Provide financial assistance to deserving students from economically disadvantaged backgrounds.',
      beneficiaries: 'Meritorious students unable to afford higher education',
      location: 'Across Karnataka',
      beneficiaryCount: '892+',
      image: '/gallery/hf_20260601_205034_bc43c6cf-e0c7-4cad-93a4-2ffbfcf404c8.png',
      path: '/scholarship-programs'
    },
    {
      name: 'Digital Literacy Programs',
      category: 'Technology',
      objective: 'Bridge the digital divide by teaching basic computer skills, internet, and email.',
      beneficiaries: 'Rural youth and adults with limited digital exposure',
      location: 'Community centers in rural areas',
      beneficiaryCount: '1,567+',
      image: '/gallery/hf_20260601_205051_ef684e6b-70a2-4b38-81b4-1f72c2d383b5.png',
      path: '/digital-literacy-programs'
    },
    {
      name: 'Career Guidance Seminars',
      category: 'Counseling',
      objective: 'Provide career counseling and guidance to help students make informed career choices.',
      beneficiaries: 'High school and college students from rural areas',
      location: 'Schools and colleges across Karnataka',
      beneficiaryCount: '3,421+',
      image: '/gallery/hf_20260601_205459_9504acc5-a175-49e6-a241-e64b77cfba71.png',
      path: '/career-guidance-seminars'
    },
    {
      name: 'Internship & Placement Support',
      category: 'Employment',
      objective: 'Connect trained students with internship and job opportunities in reputed organizations.',
      beneficiaries: 'Program graduates seeking employment',
      location: 'Bangalore and major cities',
      beneficiaryCount: '1,089+',
      image: '/gallery/hf_20260601_205507_b036cd9c-6f8d-421d-8211-0bfb53ac5069.png',
      path: '/internship-placement-support'
    },
    {
      name: 'Entrepreneurship Programs',
      category: 'Empowerment',
      objective: 'Business planning, marketing strategies, financial management, and digital tools training for launching new ventures.',
      beneficiaries: 'Aspiring entrepreneurs in rural communities',
      location: 'Karnataka',
      beneficiaryCount: '150+',
      image: '/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png',
      path: '/programs/9'
    },
    {
      name: 'Community Development Programs',
      category: 'Community',
      objective: 'Environmental Awareness Training, Health & Hygiene Awareness, Financial Inclusion Programs, Leadership & Community Engagement, Volunteer Development Programs.',
      beneficiaries: 'Rural villages and underserved communities',
      location: 'Karnataka',
      beneficiaryCount: '3,000+',
      image: '/gallery/hf_20260601_205459_9504acc5-a175-49e6-a241-e64b77cfba71.png',
      path: '/programs/10'
    },
    {
      name: 'Awareness Programs',
      category: 'Awareness',
      objective: 'Child Welfare (rights, safety, labor prevention), Environmental (plantation drives, water conservation, waste recycling), Civic & Social Responsibility.',
      beneficiaries: 'General public and rural communities',
      location: 'Across Karnataka',
      beneficiaryCount: '5,000+',
      image: '/gallery/hf_20260601_205507_b036cd9c-6f8d-421d-8211-0bfb53ac5069.png',
      path: '/programs/11'
    },
    {
      name: 'Cultural Activity Programs',
      category: 'Cultural',
      objective: 'Folk dance and traditional music promotion, Kannada Rajyotsava celebrations, street plays (Nukkad Natak), drawing and drawing/painting competitions.',
      beneficiaries: 'Rural youth, school and college students',
      location: 'Community centers and schools',
      beneficiaryCount: '2,000+',
      image: '/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png',
      path: '/programs/12'
    },
    {
      name: 'Health Programs',
      category: 'Healthcare',
      objective: 'Preventive healthcare check-up camps, Women\'s health education, Child health monitoring, Mental health workshops, Nutrition education.',
      beneficiaries: 'Rural families, women, children, and senior citizens',
      location: 'Rural health camps across Karnataka',
      beneficiaryCount: '4,500+',
      image: '/gallery/hf_20260601_204855_f08b8cb7-2c54-4262-87d4-0d1c508b7cd1.png',
      path: '/programs/13'
    }
  ];

  const [programs, setPrograms] = useState(defaultPrograms);

  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPrograms(data.map(item => ({
            name: item.name,
            category: item.category,
            objective: item.objective,
            beneficiaries: item.beneficiaries,
            location: item.location,
            beneficiaryCount: item.beneficiary_count,
            image: item.image_url || 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b',
            successStory: item.success_story,
            path: item.detail_url || `/programs/${item.id}`
          })));
        }
      })
      .catch(err => console.log('Programs API error, using fallback', err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Programs - Learningport Foundation Trust</title>
        <meta name="description" content="Explore our comprehensive programs including skill development, cloud computing training, women empowerment, scholarships, and career guidance for rural youth." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Our Programs"
            subtitle="Comprehensive initiatives designed to empower rural youth through education, skill development, and sustainable livelihood opportunities."
            badge="Programs"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProgramCard program={program} />
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

export default ProgramsPage;
