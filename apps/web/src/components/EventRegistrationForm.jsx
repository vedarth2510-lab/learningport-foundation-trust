
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const eventRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  event: z.string().min(1, 'Please select an event'),
});

function EventRegistrationForm({ events = [], onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(eventRegistrationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const registrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
      registrations.push({
        ...data,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('eventRegistrations', JSON.stringify(registrations));
      
      toast.success('Event registration successful. We will send you confirmation details.');
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error('Failed to register for event. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your full name"
          className="text-foreground placeholder:text-muted-foreground"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className="text-foreground placeholder:text-muted-foreground"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          {...register('phone')}
          placeholder="+91 9876543210"
          className="text-foreground placeholder:text-muted-foreground"
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="event">Select Event *</Label>
        <Select onValueChange={(value) => setValue('event', value)}>
          <SelectTrigger id="event" className="text-foreground">
            <SelectValue placeholder="Choose an event" />
          </SelectTrigger>
          <SelectContent>
            {events.map((event) => (
              <SelectItem key={event.id} value={event.id}>
                {event.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.event && (
          <p className="text-sm text-destructive">{errors.event.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Registering...' : 'Register for Event'}
      </Button>
    </form>
  );
}

export default EventRegistrationForm;
