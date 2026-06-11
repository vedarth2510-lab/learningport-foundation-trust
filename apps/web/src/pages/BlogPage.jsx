
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import BlogPostList from '@/components/BlogPostList';

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 'blog-1',
      title: 'How skill development programs are transforming rural youth careers',
      category: 'Success Stories',
      excerpt: 'Discover how our comprehensive skill development programs are creating new career opportunities for rural youth across Karnataka.',
      date: 'May 28, 2026',
      image: 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b',
    },
    {
      id: 'blog-2',
      title: 'Understanding government scholarship schemes for rural students',
      category: 'Government Schemes',
      excerpt: 'A comprehensive guide to available government scholarships and how rural students can apply for financial assistance.',
      date: 'May 25, 2026',
      image: 'https://images.unsplash.com/photo-1482858171642-11af2cffb404',
    },
    {
      id: 'blog-3',
      title: 'Women empowerment through entrepreneurship: Success stories',
      category: 'Women Empowerment',
      excerpt: 'Inspiring stories of rural women who built successful businesses through our entrepreneurship programs.',
      date: 'May 22, 2026',
      image: 'https://images.unsplash.com/photo-1699271772975-a4cf35547d37',
    },
    {
      id: 'blog-4',
      title: 'Career guidance for students: Choosing the right path',
      category: 'Career Guidance',
      excerpt: 'Expert advice on career planning, skill assessment, and making informed decisions about your professional future.',
      date: 'May 19, 2026',
      image: 'https://images.unsplash.com/photo-1542957057-debadce4ce81',
    },
    {
      id: 'blog-5',
      title: 'CSR partnerships creating social impact in rural Karnataka',
      category: 'CSR Activities',
      excerpt: 'How corporate partnerships are helping us scale our programs and reach more beneficiaries.',
      date: 'May 16, 2026',
      image: 'https://images.unsplash.com/photo-1679316481049-4f6549df499f',
    },
    {
      id: 'blog-6',
      title: 'Digital literacy: Bridging the technology gap in rural areas',
      category: 'Education Awareness',
      excerpt: 'The importance of digital literacy and how we are making technology accessible to rural communities.',
      date: 'May 13, 2026',
      image: 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b',
    },
    {
      id: 'blog-7',
      title: 'From classroom to career: Student placement success stories',
      category: 'Success Stories',
      excerpt: 'Real stories of students who secured jobs in leading companies after completing our training programs.',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1641897434555-720ccf02fe35',
    },
    {
      id: 'blog-8',
      title: 'Volunteer experiences: Making a difference in rural education',
      category: 'NGO Activities',
      excerpt: 'Volunteers share their experiences and the impact they have made in rural communities.',
      date: 'May 7, 2026',
      image: 'https://images.unsplash.com/photo-1671549213121-d28170cf3aa7',
    },
    {
      id: 'blog-9',
      title: 'Cloud computing careers: Opportunities for rural youth',
      category: 'Career Guidance',
      excerpt: 'Exploring the growing demand for cloud computing professionals and how rural students can enter this field.',
      date: 'May 4, 2026',
      image: 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b',
    },
  ]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogPosts(data.map(item => ({
            id: String(item.id),
            title: item.title,
            category: item.category || 'General',
            excerpt: item.excerpt || (item.content ? item.content.slice(0, 150) + '...' : ''),
            date: new Date(item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            image: item.image_url || 'https://images.unsplash.com/photo-1573894998033-c0cef4ed722b',
          })));
        }
      })
      .catch(err => console.log('Blogs API error, using fallback', err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Learningport Foundation Trust</title>
        <meta name="description" content="Read our latest articles on education, skill development, success stories, government schemes, career guidance, and social impact initiatives." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <PageBanner
            title="Blog & News"
            subtitle="Stay updated with the latest stories, insights, and news from Learningport Foundation Trust."
            badge="Blog"
          />

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <BlogPostList posts={blogPosts} />
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
