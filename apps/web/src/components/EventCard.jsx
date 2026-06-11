
import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

function EventCard({ event, onRegister }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 rounded-2xl">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl">{event.name}</CardTitle>
          {event.type && (
            <Badge variant="secondary">{event.type}</Badge>
          )}
        </div>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3">
          {event.date && (
            <div className="flex items-start space-x-3">
              <Calendar className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{event.date}</span>
            </div>
          )}
          {event.time && (
            <div className="flex items-start space-x-3">
              <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          onClick={() => onRegister && onRegister(event)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]"
        >
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
