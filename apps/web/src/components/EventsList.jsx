
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import EventCard from './EventCard';
import EventRegistrationForm from './EventRegistrationForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function EventsList({ events }) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const eventTypes = ['all', ...new Set(events.map((event) => event.type))];

  const filteredEvents = events.filter((event) => {
    return selectedType === 'all' || event.type === selectedType;
  });

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[200px] text-foreground">
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            {eventTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type === 'all' ? 'All Events' : type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No upcoming events found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onRegister={handleRegister} />
          ))}
        </div>
      )}

      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for {selectedEvent?.name}</DialogTitle>
          </DialogHeader>
          <EventRegistrationForm
            events={events}
            onSuccess={() => setShowRegistration(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EventsList;
