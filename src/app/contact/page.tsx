'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle, AlertCircle, MessageSquare,
  Users, Calendar, HelpCircle
} from 'lucide-react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Container, Typography, Button, PageTransition } from '@/components/ui';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    details: [
      '123 Art District Avenue',
      'Cultural Quarter, City 12345',
      'United States'
    ]
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    details: [
      'General: +1 (555) 123-4567',
      'Groups: +1 (555) 123-4568',
      'Education: +1 (555) 123-4569'
    ]
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    details: [
      'info@musea.com',
      'visit@musea.com',
      'education@musea.com'
    ]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 4:00 PM',
      'Sunday: Closed'
    ]
  }
];

const categories = [
  { value: 'general', label: 'General Inquiry', icon: <HelpCircle className="w-4 h-4" /> },
  { value: 'visit', label: 'Visit Information', icon: <Calendar className="w-4 h-4" /> },
  { value: 'group', label: 'Group Bookings', icon: <Users className="w-4 h-4" /> },
  { value: 'education', label: 'Educational Programs', icon: <MessageSquare className="w-4 h-4" /> },
  { value: 'media', label: 'Media & Press', icon: <Send className="w-4 h-4" /> },
  { value: 'other', label: 'Other', icon: <HelpCircle className="w-4 h-4" /> }
];

const ContactCard: React.FC<{ info: typeof contactInfo[0]; index: number }> = ({ info, index }) => (
  <motion.div
    className="bg-museum-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <motion.div
      className="inline-flex items-center justify-center w-16 h-16 bg-museum-red/10 rounded-full text-museum-red mb-6 group-hover:bg-museum-red group-hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {info.icon}
    </motion.div>
    <Typography variant="h6" font="coanda" color="primary" className="mb-4">
      {info.title}
    </Typography>
    <div className="space-y-2">
      {info.details.map((detail, i) => (
        <Typography key={i} variant="body-small" color="secondary">
          {detail}
        </Typography>
      ))}
    </div>
  </motion.div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-museum-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/facial-therapy-scaled.jpg"
              alt="Contact us"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-museum-black/80 to-museum-black/40" />
          </div>
          
          <Container size="xl" padding="lg" className="relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="caption"
                color="accent"
                className="uppercase tracking-widest font-medium mb-4"
              >
                Get In Touch
              </Typography>
              
              <Typography
                variant="display"
                font="coanda"
                color="inverse"
                className="mb-6"
              >
                Contact Us
              </Typography>
              
              <Typography
                variant="body-large"
                color="inverse"
                className="mb-8 opacity-90"
              >
                We'd love to hear from you. Whether you have questions about our exhibitions, 
                need help planning your visit, or want to explore partnership opportunities, 
                our team is here to help.
              </Typography>
            </motion.div>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-museum-light">
          <Container size="xl" padding="lg">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                font="coanda"
                color="primary"
                className="mb-6"
              >
                How to Reach Us
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                Multiple ways to connect with our team and get the information you need.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <ContactCard key={info.title} info={info} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-museum-white">
          <Container size="xl" padding="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  font="coanda"
                  color="primary"
                  className="mb-6"
                >
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body"
                  color="secondary"
                  className="mb-8"
                >
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-museum-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                          errors.name ? 'border-red-500' : 'border-museum-light'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <motion.div
                          className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-museum-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                          errors.email ? 'border-red-500' : 'border-museum-light'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <motion.div
                          className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-museum-black mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-museum-light rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-museum-black mb-2">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                        errors.category ? 'border-red-500' : 'border-museum-light'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <motion.div
                        className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.category}
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-museum-black mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-museum-light'
                      }`}
                      placeholder="Enter the subject of your message"
                    />
                    {errors.subject && (
                      <motion.div
                        className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-museum-black mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-museum-light'
                      }`}
                      placeholder="Enter your message here..."
                    />
                    {errors.message && (
                      <motion.div
                        className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full"
                    icon={isSubmitted ? <CheckCircle /> : <Send />}
                    iconPosition="left"
                  >
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                  </Button>

                  {isSubmitted && (
                    <motion.div
                      className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Thank you for your message! We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Additional Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-museum-light p-8 rounded-2xl">
                  <Typography
                    variant="h4"
                    font="coanda"
                    color="primary"
                    className="mb-6"
                  >
                    Quick Answers
                  </Typography>
                  
                  <div className="space-y-6">
                    <div>
                      <Typography variant="body" color="primary" className="font-medium mb-2">
                        What are your opening hours?
                      </Typography>
                      <Typography variant="body-small" color="secondary">
                        Monday-Friday: 10:00 AM - 6:00 PM<br />
                        Saturday-Sunday: 9:00 AM - 8:00 PM
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="body" color="primary" className="font-medium mb-2">
                        How much is admission?
                      </Typography>
                      <Typography variant="body-small" color="secondary">
                        Adults: $25, Students/Seniors: $18<br />
                        Children (5-12): $12, Family Pass: $65
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="body" color="primary" className="font-medium mb-2">
                        Do you offer group discounts?
                      </Typography>
                      <Typography variant="body-small" color="secondary">
                        Yes! Groups of 10+ receive 15% off admission.<br />
                        Contact us for educational group rates.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="body" color="primary" className="font-medium mb-2">
                        Is parking available?
                      </Typography>
                      <Typography variant="body-small" color="secondary">
                        Free parking is available on-site.<br />
                        Accessible parking spaces are available.
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-museum-red text-white p-8 rounded-2xl">
                  <Typography
                    variant="h5"
                    font="coanda"
                    color="inverse"
                    className="mb-4"
                  >
                    Need Immediate Help?
                  </Typography>
                  <Typography
                    variant="body"
                    color="inverse"
                    className="mb-6 opacity-90"
                  >
                    For urgent matters during museum hours, please call our main number.
                  </Typography>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <Typography variant="body" color="inverse" className="font-medium">
                      +1 (555) 123-4567
                    </Typography>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
}