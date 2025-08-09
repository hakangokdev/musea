'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Target, Eye, Lightbulb, Quote } from 'lucide-react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Container, Typography, Button, PageTransition } from '@/components/ui';

const stats = [
  { number: '50+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
  { number: '500K+', label: 'Annual Visitors', icon: <Users className="w-6 h-6" /> },
  { number: '10K+', label: 'Artworks', icon: <Globe className="w-6 h-6" /> },
  { number: '200+', label: 'Artists Featured', icon: <Heart className="w-6 h-6" /> }
];

const values = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Vision',
    description: 'To be the world\'s leading cultural institution, inspiring creativity and fostering understanding through art.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Mission',
    description: 'We collect, preserve, and exhibit exceptional works of art to educate and inspire diverse audiences.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to make art accessible to everyone, everywhere.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Director & Chief Curator',
    image: '/images/l-intro-1733933490.jpg',
    bio: 'Leading art historian with 25+ years of experience in museum curation and cultural preservation.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Collections',
    image: '/images/museum.jpg',
    bio: 'Expert in contemporary art with a passion for discovering and nurturing emerging artistic talents.'
  },
  {
    name: 'Elena Chen',
    role: 'Education Director',
    image: '/images/facial-therapy-scaled.jpg',
    bio: 'Dedicated to making art education accessible and engaging for visitors of all ages and backgrounds.'
  }
];

const testimonials = [
  {
    quote: "Musea has transformed how I see and understand art. Every visit is a journey of discovery.",
    author: "Jennifer Walsh",
    role: "Art Enthusiast"
  },
  {
    quote: "The educational programs here are exceptional. My students always leave inspired and motivated.",
    author: "Prof. David Kim",
    role: "Art History Professor"
  },
  {
    quote: "A world-class institution that perfectly balances tradition with innovation.",
    author: "Maria Santos",
    role: "Cultural Critic"
  }
];

const StatCard: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="inline-flex items-center justify-center w-16 h-16 bg-museum-red/10 rounded-full text-museum-red mb-4 group-hover:bg-museum-red group-hover:text-white transition-all duration-300"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {stat.icon}
    </motion.div>
    <Typography variant="h3" font="coanda" color="primary" className="mb-2">
      {stat.number}
    </Typography>
    <Typography variant="body" color="secondary">
      {stat.label}
    </Typography>
  </motion.div>
);

const ValueCard: React.FC<{ value: typeof values[0]; index: number }> = ({ value, index }) => (
  <motion.div
    className="bg-museum-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
  >
    <motion.div
      className="inline-flex items-center justify-center w-16 h-16 bg-museum-red/10 rounded-full text-museum-red mb-6 group-hover:bg-museum-red group-hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1 }}
    >
      {value.icon}
    </motion.div>
    <Typography variant="h5" font="coanda" color="primary" className="mb-4">
      {value.title}
    </Typography>
    <Typography variant="body" color="secondary">
      {value.description}
    </Typography>
  </motion.div>
);

const TeamCard: React.FC<{ member: typeof team[0]; index: number }> = ({ member, index }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
  >
    <div className="bg-museum-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <Typography variant="h6" font="coanda" color="primary" className="mb-1">
          {member.name}
        </Typography>
        <Typography variant="body-small" color="accent" className="font-medium mb-3">
          {member.role}
        </Typography>
        <Typography variant="body-small" color="secondary">
          {member.bio}
        </Typography>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0]; index: number }> = ({ testimonial, index }) => (
  <motion.div
    className="bg-museum-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    <Quote className="w-8 h-8 text-museum-red mb-4" />
    <Typography variant="body" color="secondary" className="mb-6 italic">
      "{testimonial.quote}"
    </Typography>
    <div>
      <Typography variant="body" color="primary" className="font-medium">
        {testimonial.author}
      </Typography>
      <Typography variant="body-small" color="secondary">
        {testimonial.role}
      </Typography>
    </div>
  </motion.div>
);

export default function AboutPage() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-museum-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/l-intro-1733933490.jpg"
              alt="About Musea"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-museum-black/80 to-museum-black/40" />
          </div>
          
          <Container size="xl" padding="lg" className="relative z-10">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="caption"
                color="accent"
                className="uppercase tracking-widest font-medium mb-4"
              >
                Our Story
              </Typography>
              
              <Typography
                variant="display"
                font="coanda"
                color="inverse"
                className="mb-6"
              >
                About Musea
              </Typography>
              
              <Typography
                variant="body-large"
                color="inverse"
                className="mb-8 opacity-90 max-w-3xl"
              >
                For over five decades, Musea has been at the forefront of cultural innovation, 
                bringing together the world's finest artworks and most passionate art lovers. 
                We believe that art has the power to transform lives, bridge cultures, and 
                inspire the next generation of creators.
              </Typography>
            </motion.div>
          </Container>
        </section>

        {/* Stats Section */}
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
                Our Impact
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                Numbers that reflect our commitment to excellence and our community's trust.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-museum-white">
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
                Our Values
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                The principles that guide everything we do and shape our vision for the future.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={value.title} value={value} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* History Section */}
        <section className="py-20 bg-museum-light">
          <Container size="xl" padding="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  font="coanda"
                  color="primary"
                  className="mb-6"
                >
                  Our History
                </Typography>
                <div className="space-y-6">
                  <div>
                    <Typography variant="h6" font="coanda" color="accent" className="mb-2">
                      1970 - Foundation
                    </Typography>
                    <Typography variant="body" color="secondary">
                      Musea was founded by a group of passionate art collectors and cultural visionaries 
                      who wanted to create a space where art could be accessible to everyone.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" font="coanda" color="accent" className="mb-2">
                      1985 - Expansion
                    </Typography>
                    <Typography variant="body" color="secondary">
                      Major renovation and expansion doubled our exhibition space, allowing us to 
                      showcase larger collections and host international exhibitions.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" font="coanda" color="accent" className="mb-2">
                      2010 - Digital Innovation
                    </Typography>
                    <Typography variant="body" color="secondary">
                      Launched our digital initiatives, making our collections accessible online 
                      and pioneering virtual reality art experiences.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" font="coanda" color="accent" className="mb-2">
                      Today - Global Recognition
                    </Typography>
                    <Typography variant="body" color="secondary">
                      Recognized as one of the world's leading cultural institutions, continuing 
                      to push boundaries in art curation and education.
                    </Typography>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/museum.jpg"
                    alt="Museum history"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-museum-white p-6 rounded-xl shadow-lg border border-museum-light"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Typography variant="h4" font="coanda" color="accent" className="mb-1">
                    50+
                  </Typography>
                  <Typography variant="body-small" color="secondary">
                    Years of Excellence
                  </Typography>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-museum-white">
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
                Meet Our Team
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                The passionate individuals who bring our vision to life and make Musea 
                a world-class cultural destination.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {team.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button variant="outline" size="lg">
                View Full Team
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Testimonials Section */}
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
                What People Say
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                Hear from our visitors, educators, and art enthusiasts about their 
                experiences at Musea.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-museum-red text-white">
          <Container size="xl" padding="lg">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                font="coanda"
                color="inverse"
                className="mb-6"
              >
                Join Our Journey
              </Typography>
              <Typography
                variant="body-large"
                color="inverse"
                className="mb-8 opacity-90"
              >
                Be part of our mission to make art accessible, inspiring, and transformative. 
                Whether you're an art lover, educator, or simply curious, there's a place for you at Musea.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-museum-red hover:bg-museum-light"
                >
                  Plan Your Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-museum-red"
                >
                  Support Our Mission
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
}