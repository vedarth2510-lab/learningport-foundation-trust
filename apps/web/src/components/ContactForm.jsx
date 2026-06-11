
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      // 1. Save submission to Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message
        }]);

      if (dbError) throw dbError;

      // 2. Fetch config to check if Web3Forms key is set
      const { data: config } = await supabase
        .from('contact_info')
        .select('web3forms_key')
        .eq('id', 1)
        .maybeSingle();

      if (config && config.web3forms_key) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: config.web3forms_key,
            from_name: "Learningport Website Contact Form",
            subject: `New Message: ${data.subject}`,
            ...data
          })
        });
      }

      toast.success('Message sent successfully. We will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Contact submission error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
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
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            {...register('subject')}
            placeholder="How can we help?"
            className="text-foreground placeholder:text-muted-foreground"
          />
          {errors.subject && (
            <p className="text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us more about your inquiry..."
          rows={6}
          className="text-foreground placeholder:text-muted-foreground"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;
