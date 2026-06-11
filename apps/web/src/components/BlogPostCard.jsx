
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BlogPostCard({ post }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          {post.category && (
            <Badge variant="secondary">{post.category}</Badge>
          )}
          {post.date && (
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Link to={`/blog/${post.id}`} className="w-full">
          <Button variant="ghost" className="w-full group">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BlogPostCard;
