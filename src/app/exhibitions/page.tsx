'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container, Typography, Button, PageTransition } from '@/components/ui';

interface ExhibitionProps {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  category: string;
  featured: boolean;
  capacity: number;
  rating: number;
}

const exhibitions: ExhibitionProps[] = [
  {
    id: '1',
    title: 'Modern Expressions',
    artist: 'Various Artists',
    description: 'A comprehensive showcase of contemporary art movements from the 21st century, featuring works that challenge traditional boundaries and explore new forms of artistic expression.',
    image: '/images/l-intro-1733933490.jpg',
    startDate: '2024-01-15',
    endDate: '2024-04-30',
    location: 'Main Gallery',
    category: 'Contemporary',
    featured: true,
    capacity: 150,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Urban Landscapes',
    artist: 'Marcus Chen',
    description: 'An intimate exploration of city life through the lens of photography, capturing the essence of urban environments and the stories they tell.',
    image: '/images/museum.jpg',
    startDate: '2024-02-01',
    endDate: '2024-05-15',
    location: 'Photography Wing',
    category: 'Photography',
    featured: false,
    capacity: 80,
    rating: 4.6
  },
  {
    id: '3',
    title: 'Abstract Dimensions',
    artist: 'Sofia Andersson',
    description: 'A journey through abstract art forms that push the boundaries of perception and invite viewers to explore new dimensions of creativity.',
    image: '/images/facial-therapy-scaled.jpg',
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    location: 'East Wing',
    category: 'Abstract',
    featured: true,
    capacity: 120,
    rating: 4.9
  }
];

const ExhibitionCard: React.FC<ExhibitionProps & { index: number }> = ({
  id, title, artist, description, image, startDate, endDate, location, category, featured, capacity, rating, index
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      className={`group cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="bg-museum-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <div className={`relative ${featured ? 'aspect-[2/1]' : 'aspect-[4/3]'} overflow-hidden`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-museum-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured Badge */}
          {featured && (
            <motion.div
              className="absolute top-4 left-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <div className="bg-museum-red text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            </motion.div>
          )}

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 right-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            <span className="bg-museum-white/90 backdrop-blur-sm text-museum-black px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </motion.div>

          {/* Quick Info Overlay */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{capacity}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span>{rating}</span>
                </div>
              </div>
              <Button variant="primary" size="sm">
                View Details
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <Typography variant="h5" font="coanda" color="primary" className="group-hover:text-museum-red transition-colors">
              {title}
            </Typography>
            <Typography variant="body-small" color="accent" className="font-medium">
              by {artist}
            </Typography>
          </div>

          <Typography variant="body" color="secondary" className="line-clamp-3">
            {description}
          </Typography>

          <div className="flex items-center justify-between pt-4 border-t border-museum-light">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-museum-medium text-sm">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-museum-medium text-sm">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
            
            <motion.div whileHover={{ x: 5 }}>
              <ArrowRight className="w-5 h-5 text-museum-red" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExhibitionsPage() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-museum-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/museum.jpg"
              alt="Museum exhibitions"
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="caption"
                  color="accent"
                  className="uppercase tracking-widest font-medium mb-4"
                >
                  Current & Upcoming
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="display"
                  font="coanda"
                  color="inverse"
                  className="mb-6"
                >
                  Exhibitions
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography
                  variant="body-large"
                  color="inverse"
                  className="mb-8 opacity-90"
                >
                  Discover our carefully curated exhibitions featuring works from renowned artists 
                  and emerging talents. Each exhibition tells a unique story and offers a fresh 
                  perspective on art and culture.
                </Typography>
              </motion.div>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar />}
                  iconPosition="left"
                >
                  Book Exhibition Tour
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-museum-black"
                >
                  View Schedule
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Exhibitions Grid */}
        <section className="py-20 bg-museum-light">
          <Container size="xl" padding="lg">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                font="coanda"
                color="primary"
                className="mb-6"
              >
                Featured Exhibitions
              </Typography>
              <Typography
                variant="body-large"
                color="secondary"
                className="max-w-2xl mx-auto"
              >
                Immerse yourself in our diverse collection of exhibitions, each offering 
                a unique journey through different artistic movements and cultural perspectives.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {exhibitions.map((exhibition, index) => (
                <ExhibitionCard key={exhibition.id} {...exhibition} index={index} />
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Typography
                variant="h4"
                font="coanda"
                color="primary"
                className="mb-4"
              >
                Don't Miss Out
              </Typography>
              <Typography
                variant="body"
                color="secondary"
                className="mb-8 max-w-lg mx-auto"
              >
                Subscribe to our newsletter to stay updated on upcoming exhibitions 
                and exclusive events.
              </Typography>
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Subscribe Now
              </Button>
            </motion.div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
}