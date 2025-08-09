'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Users, Calendar, MapPin } from 'lucide-react';
import { Container, Typography, Button } from '@/components/ui';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-museum-white overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/museum.jpg"
          alt="Museum interior"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-museum-white via-museum-white/80 to-transparent" />
      </motion.div>

      <Container size="xl" padding="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="caption"
                  color="accent"
                  className="uppercase tracking-widest font-medium"
                >
                  Welcome to Musea
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="display"
                  font="coanda"
                  color="primary"
                  className="leading-none"
                >
                  Discover
                  <br />
                  <motion.span
                    className="text-museum-red inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Extraordinary
                  </motion.span>
                  <br />
                  Art
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography
                  variant="body-large"
                  color="secondary"
                  className="max-w-lg leading-relaxed"
                >
                  Immerse yourself in a world of creativity and culture. Explore our curated collections,
                  featuring masterpieces from renowned artists and emerging talents from around the globe.
                </Typography>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Explore Collections
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Calendar />}
                iconPosition="left"
              >
                Plan Your Visit
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-museum-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { number: '500+', label: 'Artworks', icon: <Users /> },
                { number: '50+', label: 'Artists', icon: <Users /> },
                { number: '12', label: 'Exhibitions', icon: <MapPin /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center sm:text-left group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <motion.div
                      className="text-museum-red opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <Typography variant="h4" font="coanda" color="accent">
                      {stat.number}
                    </Typography>
                  </div>
                  <Typography variant="body-small" color="secondary">
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src="/images/l-intro-1733933490.jpg"
                alt="Featured artwork"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Play Button Overlay */}
              <motion.div
                className="absolute inset-0 bg-museum-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  className="bg-museum-white/90 backdrop-blur-sm rounded-full p-4 text-museum-black hover:bg-museum-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 ml-1" />
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-museum-white p-6 rounded-xl shadow-lg border border-museum-light backdrop-blur-sm"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Typography variant="body-small" color="secondary" className="mb-2">
                Currently Featured
              </Typography>
              <Typography variant="h6" font="coanda" color="primary">
                Modern Expressions
              </Typography>
              <Typography variant="body-small" color="secondary">
                Contemporary Art Collection
              </Typography>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{ opacity }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-museum-medium cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <Typography variant="caption" className="rotate-90 origin-center group-hover:text-museum-red transition-colors">
            Scroll
          </Typography>
          <motion.div
            className="w-px h-12 bg-museum-medium group-hover:bg-museum-red transition-colors"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};