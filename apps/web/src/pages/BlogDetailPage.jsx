import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground animate-pulse">Loading blog post...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} - Learningport Foundation Trust</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <PageBanner
            title={blog.title}
            subtitle={blog.excerpt || `Published by ${blog.author || 'Admin'}`}
            badge={blog.category || 'Blog'}
          />

          <article className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8 font-medium">
              <ArrowLeft className="h-4 w-4" /> Back to Blogs
            </Link>

            {blog.image_url && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg max-h-[450px]">
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b pb-6 mb-8">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blog.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{blog.author || 'Admin'}</span>
              </div>
              {blog.category && (
                <div className="flex items-center gap-1.5">
                  <Tag className="h-4 w-4" />
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">{blog.category}</span>
                </div>
              )}
            </div>

            {/* Render the blog content as rich HTML */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {blog.tags && (
              <div className="mt-12 pt-6 border-t">
                <h4 className="text-sm font-semibold mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.split(',').map(tag => (
                    <span key={tag} className="text-xs bg-muted px-2.5 py-1 rounded-md text-muted-foreground">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
