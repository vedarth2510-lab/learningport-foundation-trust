
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import GalleryGrid from '@/components/GalleryGrid';

function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([
    {
      url: '/gallery/hf_20260601_204809_88d0a42f-078c-4640-bb95-84e66b0884ea.png',
      caption: 'Students participating in cloud computing training session',
    },
    {
      url: '/gallery/hf_20260601_204820_8556f38f-a28c-4ea4-a23d-35294054a3e5.png',
      caption: 'Certificate distribution ceremony for skill development program graduates',
    },
    {
      url: '/gallery/hf_20260601_204855_f08b8cb7-2c54-4262-87d4-0d1c508b7cd1.png',
      caption: 'Women empowerment workshop in rural Karnataka',
    },
    {
      url: '/gallery/hf_20260601_205027_867d3526-e3d6-48ff-be1c-06ef19e2f6a5.png',
      caption: 'Career guidance seminar for rural students',
    },
    {
      url: '/gallery/hf_20260601_205034_bc43c6cf-e0c7-4cad-93a4-2ffbfcf404c8.png',
      caption: 'Digital literacy training session in community center',
    },
    {
      url: '/gallery/hf_20260601_205051_ef684e6b-70a2-4b38-81b4-1f72c2d383b5.png',
      caption: 'Women entrepreneurs showcasing their products',
    },
    {
      url: '/gallery/hf_20260601_205459_9504acc5-a175-49e6-a241-e64b77cfba71.png',
      caption: 'Scholarship award ceremony for deserving students',
    },
    {
      url: '/gallery/hf_20260601_205507_b036cd9c-6f8d-421d-8211-0bfb53ac5069.png',
      caption: 'Volunteer team conducting community outreach program',
    },
    {
      url: '/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png',
      caption: 'Students receiving hands-on technical training',
    },
  ]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setGalleryImages(data.map(item => ({
            url: item.image_url,
            caption: item.caption,
          })));
        }
      })
      .catch(err => console.log('Gallery API error, using fallback', err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery - Learningport Foundation Trust</title>
        <meta name="description" content="View photos from our events, training sessions, certificate distributions, seminars, and community outreach programs across Karnataka." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Gallery"
            subtitle="Moments captured from our programs, events, and community initiatives that showcase the impact we're making together."
            badge="Gallery"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GalleryGrid images={galleryImages} />
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default GalleryPage;
