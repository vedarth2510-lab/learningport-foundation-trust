
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

function SuccessStoryCard({ story }) {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
      <CardContent className="p-0 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-base leading-relaxed mb-6 flex-1 italic">
          "{story.testimonial}"
        </p>
        <div className="flex items-center space-x-4 mt-auto pt-4 border-t">
          <Avatar className="h-12 w-12 rounded-xl">
            <AvatarImage src={story.photo} alt={story.name} />
            <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-semibold">
              {getInitials(story.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{story.name}</p>
            {story.role && (
              <p className="text-sm text-muted-foreground">{story.role}</p>
            )}
          </div>
        </div>
        {story.impact && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium text-primary">Impact</p>
            <p className="text-sm mt-1">{story.impact}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default SuccessStoryCard;
