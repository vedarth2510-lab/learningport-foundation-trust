
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  skills: z.string().min(5, 'Please describe your skills'),
  availability: z.string().min(3, 'Please specify your availability'),
});

function VolunteerForm() {
  const [interests, setInterests] = React.useState({
    teaching: false,
    mentoring: false,
    eventOrganization: false,
    fundraising: false,
    socialMedia: false,
    contentCreation: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const submissions = JSON.parse(localStorage.getItem('volunteerSubmissions') || '[]');
      submissions.push({
        ...data,
        interests,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('volunteerSubmissions', JSON.stringify(submissions));
      
      toast.success('Volunteer registration submitted successfully. We will contact you soon.');
      reset();
      setInterests({
        teaching: false,
        mentoring: false,
        eventOrganization: false,
        fundraising: false,
        socialMedia: false,
        contentCreation: false,
      });
    } catch (error) {
      toast.error('Failed to submit registration. Please try again.');
    }
  };

  const interestOptions = [
    { id: 'teaching', label: 'Teaching & Training' },
    { id: 'mentoring', label: 'Student Mentoring' },
    { id: 'eventOrganization', label: 'Event Organization' },
    { id: 'fundraising', label: 'Fundraising' },
    { id: 'socialMedia', label: 'Social Media Management' },
    { id: 'contentCreation', label: 'Content Creation' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <Label htmlFor="skills">Skills & Expertise *</Label>
        <Textarea
          id="skills"
          {...register('skills')}
          placeholder="Describe your skills and how you can contribute..."
          rows={4}
          className="text-foreground placeholder:text-muted-foreground"
        />
        {errors.skills && (
          <p className="text-sm text-destructive">{errors.skills.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability *</Label>
        <Input
          id="availability"
          {...register('availability')}
          placeholder="e.g., Weekends, 2 hours/week, Flexible"
          className="text-foreground placeholder:text-muted-foreground"
        />
        {errors.availability && (
          <p className="text-sm text-destructive">{errors.availability.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <Label>Areas of Interest</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {interestOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={interests[option.id]}
                onCheckedChange={(checked) =>
                  setInterests((prev) => ({ ...prev, [option.id]: checked }))
                }
              />
              <Label htmlFor={option.id} className="font-normal cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
      </Button>
    </form>
  );
}

export default VolunteerForm;
