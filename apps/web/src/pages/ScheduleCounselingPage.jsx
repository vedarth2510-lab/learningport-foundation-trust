import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, User, Mail, Phone, MessageSquare, Clock, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function ScheduleCounselingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    currentEducation: '',
    counselingType: '',
    preferredDate: '',
    preferredTime: '',
    sessionMode: 'online',
    concerns: '',
    previousCounseling: 'no',
    agreeTerms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Counseling form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Counseling Scheduled - Learning Port Foundations</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto px-4"
            >
              <Card className="text-center">
                <CardContent className="pt-12 pb-12">
                  <div className="mx-auto w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <CheckCircle className="h-12 w-12 text-blue-600" />
                  </div>
                  <h1 className="text-3xl font-bold mb-4">Counseling Session Scheduled!</h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for scheduling a counseling session with us. Our expert counselor will contact you within 24 hours to confirm your appointment.
                  </p>
                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div>
                        <p className="text-sm text-muted-foreground">Preferred Date</p>
                        <p className="font-semibold">{new Date(formData.preferredDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Preferred Time</p>
                        <p className="font-semibold">{formData.preferredTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Session Mode</p>
                        <p className="font-semibold capitalize">{formData.sessionMode}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Contact Email</p>
                        <p className="font-semibold">{formData.email}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">
                    A confirmation email has been sent to <strong>{formData.email}</strong> with session details and counselor information.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Schedule Another Session
                    </Button>
                    <Button onClick={() => window.location.href = '/'}>
                      Return to Home
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Schedule Counseling Session - Learning Port Foundations</title>
        <meta name="description" content="Schedule a free career counseling session with our expert counselors. Get personalized guidance for your career path and educational decisions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                  <Calendar className="h-8 w-8 text-indigo-600" />
                </div>
                <h1 className="mb-4 text-4xl font-bold">Schedule Career Counseling</h1>
                <p className="text-lg text-muted-foreground">
                  Get expert guidance from our certified career counselors. Book a free one-on-one session to discuss your career goals and educational path.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Expert Counselors</h3>
                      <p className="text-sm text-muted-foreground">Certified professionals with 10+ years experience</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Free Session</h3>
                      <p className="text-sm text-muted-foreground">No charges for the first counseling session</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Flexible Timing</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred date and time slot</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Form Section */}
              <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-primary" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>Tell us about yourself</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Age *</Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            placeholder="Your age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="currentEducation">Current Education Level *</Label>
                        <Select name="currentEducation" onValueChange={(value) => setFormData(prev => ({ ...prev, currentEducation: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your current education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9th-10th">9th - 10th Standard</SelectItem>
                            <SelectItem value="11th-12th">11th - 12th Standard</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate</SelectItem>
                            <SelectItem value="working-professional">Working Professional</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Counseling Details */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                        Counseling Details
                      </CardTitle>
                      <CardDescription>Help us understand your needs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="counselingType">Type of Counseling *</Label>
                        <Select name="counselingType" onValueChange={(value) => setFormData(prev => ({ ...prev, counselingType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select counseling type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="career-guidance">Career Guidance</SelectItem>
                            <SelectItem value="stream-selection">Stream Selection (After 10th/12th)</SelectItem>
                            <SelectItem value="college-selection">College/University Selection</SelectItem>
                            <SelectItem value="skill-development">Skill Development Planning</SelectItem>
                            <SelectItem value="job-search">Job Search Strategy</SelectItem>
                            <SelectItem value="career-change">Career Change Guidance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="concerns">What would you like to discuss? *</Label>
                        <Textarea
                          id="concerns"
                          name="concerns"
                          placeholder="Please describe your concerns, questions, or what you hope to achieve from this counseling session..."
                          value={formData.concerns}
                          onChange={handleInputChange}
                          required
                          rows={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Have you attended career counseling before?</Label>
                        <RadioGroup
                          value={formData.previousCounseling}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, previousCounseling: value }))}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="prev-yes" />
                            <Label htmlFor="prev-yes" className="font-normal cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="prev-no" />
                            <Label htmlFor="prev-no" className="font-normal cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Schedule Details */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        Schedule Your Session
                      </CardTitle>
                      <CardDescription>Choose your preferred date and time</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time Slot *</Label>
                          <Select name="preferredTime" onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="09:00-10:00">09:00 AM - 10:00 AM</SelectItem>
                              <SelectItem value="10:00-11:00">10:00 AM - 11:00 AM</SelectItem>
                              <SelectItem value="11:00-12:00">11:00 AM - 12:00 PM</SelectItem>
                              <SelectItem value="12:00-13:00">12:00 PM - 01:00 PM</SelectItem>
                              <SelectItem value="14:00-15:00">02:00 PM - 03:00 PM</SelectItem>
                              <SelectItem value="15:00-16:00">03:00 PM - 04:00 PM</SelectItem>
                              <SelectItem value="16:00-17:00">04:00 PM - 05:00 PM</SelectItem>
                              <SelectItem value="17:00-18:00">05:00 PM - 06:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Session Mode *</Label>
                        <RadioGroup
                          value={formData.sessionMode}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, sessionMode: value }))}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="mode-online" />
                            <Label htmlFor="mode-online" className="font-normal cursor-pointer">
                              Online (Video Call via Google Meet/Zoom)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="mode-phone" />
                            <Label htmlFor="mode-phone" className="font-normal cursor-pointer">
                              Phone Call
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="in-person" id="mode-person" />
                            <Label htmlFor="mode-person" className="font-normal cursor-pointer">
                              In-Person (BTM Layout, Bangalore)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> Session duration is approximately 45-60 minutes. Our counselor will contact you 24 hours before the scheduled time to confirm the appointment.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Terms and Submit */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3 mb-6">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: checked }))}
                          required
                        />
                        <label htmlFor="agreeTerms" className="text-sm leading-relaxed cursor-pointer">
                          I agree to receive counseling session details and reminders via email and phone. I understand that the information shared during the session will be kept confidential and used only for counseling purposes.
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={!formData.agreeTerms}>
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule Counseling Session
                      </Button>

                      <p className="text-xs text-center text-muted-foreground mt-4">
                        Free counseling session • No hidden charges • Expert guidance
                      </p>
                    </CardContent>
                  </Card>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ScheduleCounselingPage;
