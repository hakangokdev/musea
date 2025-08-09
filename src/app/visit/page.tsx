'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, MapPin, Phone, Mail, Calendar, Users, 
  Car, Train, Bus, Accessibility, Camera, 
  CreditCard, Ticket, Info, CheckCircle, AlertCircle 
} from 'lucide-react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Container, Typography, Button, PageTransition } from '@/components/ui';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  visitors: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const visitInfo = {
  hours: {
    weekdays: '10:00 AM - 6:00 PM',
    weekends: '9:00 AM - 8:00 PM',
    holidays: '10:00 AM - 4:00 PM'
  },
  admission: {
    adult: '$25',
    student: '$18',
    senior: '$20',
    child: '$12',
    family: '$65'
  },
  contact: {
    address: '123 Art District Avenue, Cultural Quarter, City 12345',
    phone: '+1 (555) 123-4567',
    email: 'visit@musea.com'
  }
};

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  index: number;
}> = ({ icon, title, content, index }) => (
  <motion.div
    className="bg-museum-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <motion.div
      className="flex items-center gap-4 mb-4"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-3 bg-museum-red/10 rounded-lg text-museum-red group-hover:bg-museum-red group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <Typography variant="h6" font="coanda" color="primary">
        {title}
      </Typography>
    </motion.div>
    <div className="text-museum-medium">
      {typeof content === 'string' ? (
        <Typography variant="body" color="secondary">
          {content}
        </Typography>
      ) : (
        content
      )}
    </div>
  </motion.div>
);

export default function VisitPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    visitors: '1',
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      newErrors.date = 'Visit date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Visit time is required';
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
        date: '',
        time: '',
        visitors: '1',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
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
              src="/images/museum.jpg"
              alt="Museum visit"
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
                Plan Your Experience
              </Typography>
              
              <Typography
                variant="display"
                font="coanda"
                color="inverse"
                className="mb-6"
              >
                Visit Musea
              </Typography>
              
              <Typography
                variant="body-large"
                color="inverse"
                className="mb-8 opacity-90"
              >
                Discover art, culture, and inspiration in our world-class museum. 
                Plan your visit and make the most of your cultural journey with us.
              </Typography>
            </motion.div>
          </Container>
        </section>

        {/* Visit Information */}
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
                Essential Information
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                Everything you need to know for your visit to Musea Art Museum.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <InfoCard
                icon={<Clock className="w-6 h-6" />}
                title="Opening Hours"
                content={
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">{visitInfo.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">{visitInfo.hours.weekends}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Holidays</span>
                      <span className="font-medium">{visitInfo.hours.holidays}</span>
                    </div>
                  </div>
                }
                index={0}
              />

              <InfoCard
                icon={<Ticket className="w-6 h-6" />}
                title="Admission Prices"
                content={
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Adult</span>
                      <span className="font-medium">{visitInfo.admission.adult}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Student/Senior</span>
                      <span className="font-medium">{visitInfo.admission.student}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Child (5-12)</span>
                      <span className="font-medium">{visitInfo.admission.child}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Family Pass</span>
                      <span className="font-medium">{visitInfo.admission.family}</span>
                    </div>
                  </div>
                }
                index={1}
              />

              <InfoCard
                icon={<MapPin className="w-6 h-6" />}
                title="Location & Contact"
                content={
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 text-museum-red" />
                      <span className="text-sm">{visitInfo.contact.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-museum-red" />
                      <span className="text-sm">{visitInfo.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-museum-red" />
                      <span className="text-sm">{visitInfo.contact.email}</span>
                    </div>
                  </div>
                }
                index={2}
              />
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Car className="w-5 h-5" />, label: 'Free Parking' },
                { icon: <Accessibility className="w-5 h-5" />, label: 'Wheelchair Access' },
                { icon: <Camera className="w-5 h-5" />, label: 'Photography Allowed' },
                { icon: <CreditCard className="w-5 h-5" />, label: 'Card Payments' }
              ].map((service, index) => (
                <motion.div
                  key={service.label}
                  className="flex flex-col items-center text-center p-4 bg-museum-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-2 bg-museum-red/10 rounded-full text-museum-red mb-2">
                    {service.icon}
                  </div>
                  <Typography variant="body-small" color="primary" className="font-medium">
                    {service.label}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Booking Form */}
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
                  Book Your Visit
                </Typography>
                <Typography
                  variant="body"
                  color="secondary"
                  className="mb-8"
                >
                  Reserve your spot and ensure the best experience during your visit.
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-museum-light'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <motion.div
                        className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </motion.div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-museum-black mb-2">
                        Visit Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                          errors.date ? 'border-red-500' : 'border-museum-light'
                        }`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {errors.date && (
                        <motion.div
                          className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.date}
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-museum-black mb-2">
                        Visit Time *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors ${
                          errors.time ? 'border-red-500' : 'border-museum-light'
                        }`}
                      >
                        <option value="">Select time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                      {errors.time && (
                        <motion.div
                          className="flex items-center gap-1 mt-1 text-red-500 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.time}
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-museum-black mb-2">
                        Number of Visitors
                      </label>
                      <select
                        value={formData.visitors}
                        onChange={(e) => handleInputChange('visitors', e.target.value)}
                        className="w-full px-4 py-3 border border-museum-light rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-museum-black mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-museum-light rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red transition-colors resize-none"
                      placeholder="Any special requirements or questions?"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full"
                    icon={isSubmitted ? <CheckCircle /> : <Calendar />}
                    iconPosition="left"
                  >
                    {isSubmitting ? 'Booking...' : isSubmitted ? 'Booking Confirmed!' : 'Book Your Visit'}
                  </Button>

                  {isSubmitted && (
                    <motion.div
                      className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Your visit has been successfully booked! We'll send you a confirmation email shortly.</span>
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Map/Info */}
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
                    Getting Here
                  </Typography>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-museum-red/10 rounded-lg text-museum-red">
                        <Train className="w-5 h-5" />
                      </div>
                      <div>
                        <Typography variant="body" color="primary" className="font-medium mb-1">
                          By Public Transport
                        </Typography>
                        <Typography variant="body-small" color="secondary">
                          Metro Line 2 to Cultural Station (5 min walk)<br />
                          Bus routes 15, 23, 45 stop directly outside
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-museum-red/10 rounded-lg text-museum-red">
                        <Car className="w-5 h-5" />
                      </div>
                      <div>
                        <Typography variant="body" color="primary" className="font-medium mb-1">
                          By Car
                        </Typography>
                        <Typography variant="body-small" color="secondary">
                          Free parking available on-site<br />
                          Entrance via Cultural Avenue
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-museum-red/10 rounded-lg text-museum-red">
                        <Info className="w-5 h-5" />
                      </div>
                      <div>
                        <Typography variant="body" color="primary" className="font-medium mb-1">
                          Visitor Guidelines
                        </Typography>
                        <Typography variant="body-small" color="secondary">
                          • Photography allowed (no flash)<br />
                          • Food and drinks in café only<br />
                          • Large bags must be checked<br />
                          • Audio guides available
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-museum-red text-white p-8 rounded-2xl">
                  <Typography
                    variant="h5"
                    font="coanda"
                    color="inverse"
                    className="mb-4"
                  >
                    Need Help?
                  </Typography>
                  <Typography
                    variant="body"
                    color="inverse"
                    className="mb-6 opacity-90"
                  >
                    Our visitor services team is here to help make your visit memorable.
                  </Typography>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{visitInfo.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{visitInfo.contact.email}</span>
                    </div>
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