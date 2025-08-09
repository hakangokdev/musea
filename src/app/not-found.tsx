'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Compass } from 'lucide-react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container, Typography, Button } from '@/components/ui';

const floatingElements = [
  { id: 1, x: 10, y: 20, delay: 0 },
  { id: 2, x: 80, y: 10, delay: 0.5 },
  { id: 3, x: 20, y: 70, delay: 1 },
  { id: 4, x: 70, y: 60, delay: 1.5 },
  { id: 5, x: 50, y: 30, delay: 2 }
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden bg-gradient-to-br from-museum-light via-museum-white to-museum-light">
        {/* Floating Background Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-20 h-20 bg-museum-red/5 rounded-full blur-xl"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        <Container size="xl" padding="lg" className="relative z-10 flex items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-2xl">
            {/* 404 Animation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="text-8xl md:text-9xl font-coanda font-black text-museum-red/20 mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(179, 35, 46, 0.3)",
                    "0 0 20px rgba(179, 35, 46, 0.5)",
                    "0 0 0px rgba(179, 35, 46, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h2"
                font="coanda"
                color="primary"
                className="mb-4"
              >
                Artwork Not Found
              </Typography>
              
              <Typography
                variant="body-large"
                color="secondary"
                className="mb-8 max-w-lg mx-auto"
              >
                It seems the page you're looking for has been moved to a different gallery, 
                or perhaps it never existed in our collection.
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Home />}
                  iconPosition="left"
                >
                  Return Home
                </Button>
              </Link>
              
              <Link href="/collections">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Compass />}
                  iconPosition="left"
                >
                  Explore Collections
                </Button>
              </Link>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              className="mt-12 pt-8 border-t border-museum-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Typography
                variant="body"
                color="secondary"
                className="mb-6"
              >
                Looking for something specific? Try these popular sections:
              </Typography>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Exhibitions', href: '/exhibitions', icon: <Search className="w-4 h-4" /> },
                  { label: 'Collections', href: '/collections', icon: <Compass className="w-4 h-4" /> },
                  { label: 'Visit Us', href: '/visit', icon: <Home className="w-4 h-4" /> },
                  { label: 'About', href: '/about', icon: <ArrowLeft className="w-4 h-4" /> }
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 p-3 bg-museum-white rounded-lg shadow-sm hover:shadow-md hover:bg-museum-light transition-all duration-200 group"
                    >
                      <span className="text-museum-red group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      <Typography variant="body-small" color="primary" className="font-medium">
                        {link.label}
                      </Typography>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Quote */}
            <motion.div
              className="mt-12 p-6 bg-museum-white/50 rounded-2xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Typography
                variant="body"
                color="secondary"
                className="italic"
              >
                "Every great work of art has two faces, one toward its own time and one toward the future, 
                toward eternity." — Daniel Barenboim
              </Typography>
            </motion.div>
          </div>
        </Container>

        {/* Animated Art Pieces */}
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 bg-museum-red/10 rounded-lg"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-20 right-20 w-12 h-12 bg-museum-red/20 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-16 w-8 h-20 bg-museum-red/15 rounded-full"
          animate={{
            rotate: [0, 10, -10, 0],
            x: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </main>
      
      <Footer />
    </div>
  );
}