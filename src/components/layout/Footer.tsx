'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Instagram, Twitter, Youtube,
  ArrowRight, Heart, Send
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Typography, Button } from '@/components/ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Exhibitions', href: '/exhibitions' },
    { label: 'Collections', href: '/collections' },
    { label: 'Visit Us', href: '/visit' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#instagram' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#facebook' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#twitter' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#youtube' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10" />
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/30 rounded-lg rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/30 rounded-full" />
      </div>

      <Container size="xl" padding="lg" className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand & Contact */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <Typography variant="h3" font="coanda" color="inverse" className="mb-4 text-white">
                  MUSEA
                </Typography>
                {/* Professional accent line */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full mb-4" />
              </div>
              
              <Typography variant="body" color="secondary" className="text-slate-300 leading-relaxed">
                Discover extraordinary art collections and exhibitions. Immerse yourself in creativity and culture.
              </Typography>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#FFE08A] hover:text-[#FFD700] transition-colors group cursor-pointer">
                  <MapPin className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <Typography variant="body-small" className="text-[#FFE08A] group-hover:text-[#FFD700]">
                    123 Art District Avenue, Cultural Quarter
                  </Typography>
                </div>
                <div className="flex items-center gap-3 text-[#FFE08A] hover:text-[#FFD700] transition-colors group cursor-pointer">
                  <Phone className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <Typography variant="body-small" className="text-[#FFE08A] group-hover:text-[#FFD700]">
                    +1 (555) 123-4567
                  </Typography>
                </div>
                <div className="flex items-center gap-3 text-[#FFE08A] hover:text-[#FFD700] transition-colors group cursor-pointer">
                  <Mail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <Typography variant="body-small" className="text-[#FFE08A] group-hover:text-[#FFD700]">
                    info@musea.com
                  </Typography>
                </div>
                <div className="flex items-center gap-3 text-[#FFE08A] hover:text-[#FFD700] transition-colors group">
                  <Clock className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <Typography variant="body-small" className="text-[#FFE08A] group-hover:text-[#FFD700]">
                    Mon-Fri: 10AM-6PM, Sat-Sun: 9AM-8PM
                  </Typography>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <Typography variant="h6" font="coanda" color="inverse" className="mb-3 text-white">
                  Quick Links
                </Typography>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
              </div>
              
              <nav className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-[#FFE08A] hover:text-[#FFD700] transition-all duration-300 py-1"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-red-500 transition-all duration-300 transform group-hover:translate-x-1" />
                      <Typography variant="body-small" className="text-[#FFE08A] group-hover:text-[#FFD700] font-medium">
                        {link.label}
                      </Typography>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <Typography variant="h6" font="coanda" color="inverse" className="mb-3 text-white">
                  Stay Connected
                </Typography>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
              </div>
              
              <Typography variant="body-small" color="secondary" className="text-slate-300 leading-relaxed">
                Subscribe for exclusive updates on exhibitions and events.
              </Typography>
              
              {/* Newsletter Form with Enhanced Glassmorphism */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60 focus:bg-white/15 transition-all duration-300 text-sm"
                  />
                </div>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-0 shadow-lg hover:shadow-red-500/30 transition-all duration-300 py-3.5 rounded-xl font-medium"
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Subscribe
                </Button>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <Typography variant="body-small" color="secondary" className="text-slate-300">
                  Follow us on social media
                </Typography>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-slate-300 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      aria-label={social.name}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Typography variant="body-small" color="secondary" className="text-slate-400">
                © {currentYear} Musea Art Museum. Made with
              </Typography>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <Typography variant="body-small" color="secondary" className="text-slate-400">
                for art lovers.
              </Typography>
            </div>

            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-[#FFE08A] hover:text-[#FFD700] transition-colors duration-300 hover:underline underline-offset-4"
              >
                <Typography variant="body-small" className="font-medium text-[#FFE08A] hover:text-[#FFD700]">Privacy Policy</Typography>
              </Link>
              <Link
                href="/terms"
                className="text-[#FFE08A] hover:text-[#FFD700] transition-colors duration-300 hover:underline underline-offset-4"
              >
                <Typography variant="body-small" className="font-medium text-[#FFE08A] hover:text-[#FFD700]">Terms of Service</Typography>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};