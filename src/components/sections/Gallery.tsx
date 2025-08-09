'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Heart, Share2, Eye, ArrowRight, Filter } from 'lucide-react';
import { Container, Typography, Button } from '@/components/ui';

interface ArtworkProps {
  id: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  category: string;
  likes?: number;
  views?: number;
}

const artworks: ArtworkProps[] = [
  {
    id: '1',
    title: 'Serenity in Motion',
    artist: 'Elena Rodriguez',
    year: '2023',
    image: '/images/l-intro-1733933490.jpg',
    category: 'Contemporary',
    likes: 124,
    views: 1250
  },
  {
    id: '2',
    title: 'Urban Reflections',
    artist: 'Marcus Chen',
    year: '2022',
    image: '/images/museum.jpg',
    category: 'Photography',
    likes: 89,
    views: 890
  },
  {
    id: '3',
    title: 'Abstract Harmony',
    artist: 'Sofia Andersson',
    year: '2023',
    image: '/images/facial-therapy-scaled.jpg',
    category: 'Abstract',
    likes: 156,
    views: 1680
  }
];

const ArtworkCard: React.FC<ArtworkProps & { index: number }> = ({ 
  title, artist, year, image, category, likes, views, index 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-museum-light mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-museum-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        {/* Category Badge */}
        <motion.div
          className="absolute top-4 left-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          <span className="bg-museum-white/90 backdrop-blur-sm text-museum-black px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: 20, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <motion.button
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked ? 'bg-museum-red text-white' : 'bg-museum-white/90 text-museum-black hover:bg-museum-red hover:text-white'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </motion.button>
          
          <motion.button
            className="p-2 rounded-full bg-museum-white/90 backdrop-blur-sm text-museum-black hover:bg-museum-red hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <div className="flex items-center gap-4 text-white text-xs">
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
      >
        <Typography variant="h6" font="coanda" color="primary" className="group-hover:text-museum-red transition-colors">
          {title}
        </Typography>
        <Typography variant="body-small" color="secondary">
          {artist} • {year}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ['All', 'Contemporary', 'Photography', 'Abstract'];

  return (
    <section id="collections" className="py-20 bg-museum-light">
      <Container size="xl" padding="lg">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="caption"
              color="accent"
              className="uppercase tracking-widest font-medium mb-4"
            >
              Featured Collections
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="h2"
              font="coanda"
              color="primary"
              className="mb-6"
            >
              Curated Masterpieces
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography
              variant="body-large"
              color="secondary"
              className="max-w-2xl mx-auto"
            >
              Explore our carefully selected collection of contemporary and classical artworks 
              from talented artists around the world.
            </Typography>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 bg-museum-white rounded-full p-2 shadow-lg">
            <Filter className="w-4 h-4 text-museum-medium ml-2" />
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-museum-red text-white shadow-md'
                    : 'text-museum-black hover:bg-museum-light'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={artwork.id} {...artwork} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button
            variant="outline"
            size="lg"
            icon={<ArrowRight />}
            iconPosition="right"
          >
            View All Collections
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 pt-16 border-t border-museum-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Artworks in Collection', icon: '/icons/artworks.png' },
              { number: '50+', label: 'Featured Artists', icon: '/icons/artist.png' },
              { number: '12', label: 'Active Exhibitions', icon: '/icons/Exhibitions.png' },
              { number: '25k+', label: 'Annual Visitors', icon: '/icons/Annual Visitors.png' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="relative w-12 h-12 mx-auto mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    fill
                    className="object-contain group-hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
                <Typography variant="h3" font="coanda" color="accent" className="mb-2">
                  {stat.number}
                </Typography>
                <Typography variant="body" color="secondary">
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};