import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Upload, User, Mail, Phone, MapPin, GraduationCap, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

function RegisterPlacementPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    qualification: '',
    specialization: '',
    university: '',
    yearOfPassing: '',
    percentage: '',
    skills: '',
    experience: '',
    currentEmployment: '',
    preferredLocation: '',
    expectedSalary: '',
    resume: null,
    agreeTerms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Registration Successful - Learning Port Foundations</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto px-4"
            >
              <Card className="text-center">
                <CardContent className="pt-12 pb-12">
                  <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h1 className="text-3xl font-bold mb-4">Registration Successful!</h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for registering for our placement program. Our team will review your application and contact you within 2-3 business days.
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    You will receive a confirmation email at <strong>{formData.email}</strong> with further details.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Submit Another Application
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
        <title>Register for Placement - Learning Port Foundations</title>
        <meta name="description" content="Register for our placement program and get connected with 200+ leading companies. Free placement support with resume building and interview preparation." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h1 className="mb-4 text-4xl font-bold">Register for Placement</h1>
                <p className="text-lg text-muted-foreground">
                  Take the first step towards your dream career. Fill out the form below and our placement team will connect you with leading companies.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-primary" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>Please provide your basic details</CardDescription>
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
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                          <Input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select name="gender" onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address *</Label>
                        <Textarea
                          id="address"
                          name="address"
                          placeholder="Enter your complete address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pincode *</Label>
                          <Input
                            id="pincode"
                            name="pincode"
                            placeholder="560001"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Educational Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        Educational Qualification
                      </CardTitle>
                      <CardDescription>Tell us about your education</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="qualification">Highest Qualification *</Label>
                          <Select name="qualification" onValueChange={(value) => setFormData(prev => ({ ...prev, qualification: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10th">10th Standard</SelectItem>
                              <SelectItem value="12th">12th Standard</SelectItem>
                              <SelectItem value="diploma">Diploma</SelectItem>
                              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                              <SelectItem value="masters">Master's Degree</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialization">Specialization/Stream *</Label>
                          <Input
                            id="specialization"
                            name="specialization"
                            placeholder="e.g., Computer Science, Commerce"
                            value={formData.specialization}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="university">University/Board *</Label>
                          <Input
                            id="university"
                            name="university"
                            placeholder="Name of university/board"
                            value={formData.university}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearOfPassing">Year of Passing *</Label>
                          <Input
                            id="yearOfPassing"
                            name="yearOfPassing"
                            type="number"
                            placeholder="2024"
                            value={formData.yearOfPassing}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="percentage">Percentage/CGPA *</Label>
                        <Input
                          id="percentage"
                          name="percentage"
                          placeholder="e.g., 85% or 8.5 CGPA"
                          value={formData.percentage}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Professional Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-primary" />
                        Professional Details
                      </CardTitle>
                      <CardDescription>Share your skills and experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="skills">Key Skills *</Label>
                        <Textarea
                          id="skills"
                          name="skills"
                          placeholder="e.g., Java, Python, Communication, Leadership (comma separated)"
                          value={formData.skills}
                          onChange={handleInputChange}
                          required
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Work Experience (if any)</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          placeholder="Describe your work experience, internships, or projects"
                          value={formData.experience}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="currentEmployment">Current Employment Status *</Label>
                        <Select name="currentEmployment" onValueChange={(value) => setFormData(prev => ({ ...prev, currentEmployment: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fresher">Fresher</SelectItem>
                            <SelectItem value="employed">Currently Employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredLocation">Preferred Job Location *</Label>
                          <Input
                            id="preferredLocation"
                            name="preferredLocation"
                            placeholder="e.g., Bangalore, Anywhere in India"
                            value={formData.preferredLocation}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expectedSalary">Expected Salary (LPA) *</Label>
                          <Input
                            id="expectedSalary"
                            name="expectedSalary"
                            placeholder="e.g., 3-5 LPA"
                            value={formData.expectedSalary}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume">Upload Resume (PDF, Max 5MB) *</Label>
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          required
                          className="cursor-pointer"
                        />
                        <p className="text-xs text-muted-foreground">Please upload your latest resume in PDF format</p>
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
                          I agree to the terms and conditions and consent to Learning Port Foundations sharing my information with potential employers for placement purposes. I understand that all information provided is accurate and complete.
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={!formData.agreeTerms}>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Submit Registration
                      </Button>

                      <p className="text-xs text-center text-muted-foreground mt-4">
                        By submitting this form, you agree to our privacy policy and terms of service.
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

export default RegisterPlacementPage;
