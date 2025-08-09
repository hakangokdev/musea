'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Heart, Share2, Eye, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Container, Typography, Button, PageTransition } from '@/components/ui';

interface ArtworkProps {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  category: string;
  description: string;
  price?: string;
  likes: number;
  views: number;
  available: boolean;
}

const artworks: ArtworkProps[] = [
  {
    id: '1',
    title: 'Serenity in Motion',
    artist: 'Elena Rodriguez',
    year: '2023',
    medium: 'Oil on Canvas',
    dimensions: '120 x 90 cm',
    image: '/images/l-intro-1733933490.jpg',
    category: 'Contemporary',
    description: 'A mesmerizing piece that captures the essence of movement and tranquility in perfect harmony.',
    price: '$15,000',
    likes: 124,
    views: 1250,
    available: true
  },
  {
    id: '2',
    title: 'Urban Reflections',
    artist: 'Marcus Chen',
    year: '2022',
    medium: 'Digital Photography',
    dimensions: '100 x 70 cm',
    image: '/images/museum.jpg',
    category: 'Photography',
    description: 'An intimate exploration of city life through the lens of contemporary photography.',
    price: '$8,500',
    likes: 89,
    views: 890,
    available: true
  },
  {
    id: '3',
    title: 'Abstract Harmony',
    artist: 'Sofia Andersson',
    year: '2023',
    medium: 'Acrylic on Canvas',
    dimensions: '150 x 100 cm',
    image: '/images/facial-therapy-scaled.jpg',
    category: 'Abstract',
    description: 'A bold exploration of color and form that challenges traditional artistic boundaries.',
    price: '$22,000',
    likes: 156,
    views: 1680,
    available: false
  },
  {
    id: '4',
    title: 'Whispers of Time',
    artist: 'David Kim',
    year: '2021',
    medium: 'Mixed Media',
    dimensions: '80 x 120 cm',
    image: '/images/l-intro-1733933490.jpg',
    category: 'Mixed Media',
    description: 'A contemplative piece that explores the passage of time through layered textures.',
    price: '$12,000',
    likes: 203,
    views: 2100,
    available: true
  },
  {
    id: '5',
    title: 'Digital Dreams',
    artist: 'Alex Thompson',
    year: '2023',
    medium: 'Digital Art',
    dimensions: '60 x 90 cm',
    image: '/images/museum.jpg',
    category: 'Digital',
    description: 'A futuristic vision that blends technology with artistic expression.',
    price: '$6,500',
    likes: 78,
    views: 650,
    available: true
  },
  {
    id: '6',
    title: 'Nature\'s Symphony',
    artist: 'Maria Santos',
    year: '2022',
    medium: 'Watercolor',
    dimensions: '70 x 50 cm',
    image: '/images/facial-therapy-scaled.jpg',
    category: 'Traditional',
    description: 'A delicate watercolor that captures the beauty and complexity of natural forms.',
    price: '$4,200',
    likes: 145,
    views: 1320,
    available: true
  }
];

const categories = ['All', 'Contemporary', 'Photography', 'Abstract', 'Mixed Media', 'Digital', 'Traditional'];

const ArtworkCard: React.FC<ArtworkProps & { viewMode: 'grid' | 'list'; index: number }> = ({
  id, title, artist, year, medium, dimensions, image, category, description, price, likes, views, available, viewMode, index
}) => {
  const [isLiked, setIsLiked] = useState(false);

  if (viewMode === 'list') {
    return (
      <motion.div
        className="bg-museum-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3 aspect-[4/3] md:aspect-auto">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {!available && (
              <div className="absolute inset-0 bg-museum-black/50 flex items-center justify-center">
                <span className="bg-museum-red text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sold
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <Typography variant="h5" font="coanda" color="primary" className="group-hover:text-museum-red transition-colors">
                    {title}
                  </Typography>
                  <Typography variant="body" color="accent" className="font-medium">
                    by {artist} • {year}
                  </Typography>
                </div>
                {price && (
                  <Typography variant="h6" font="coanda" color="primary">
                    {price}
                  </Typography>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-museum-medium">
                <span>{medium}</span>
                <span>•</span>
                <span>{dimensions}</span>
                <span>•</span>
                <span className="bg-museum-light px-2 py-1 rounded-full">{category}</span>
              </div>
              
              <Typography variant="body" color="secondary" className="line-clamp-2">
                {description}
              </Typography>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-museum-light">
              <div className="flex items-center gap-4 text-sm text-museum-medium">
                <div className="flex items-center gap-1">
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-museum-red' : ''}`} />
                  <span>{likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{views}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Heart className={isLiked ? 'fill-current' : ''} />}
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? 'text-museum-red' : ''}
                >
                  Like
                </Button>
                <Button variant="ghost" size="sm" icon={<Share2 />}>
                  Share
                </Button>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="bg-museum-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-museum-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          {!available && (
            <div className="absolute top-4 left-4">
              <span className="bg-museum-red text-white px-3 py-1 rounded-full text-xs font-medium">
                Sold
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-museum-white/90 backdrop-blur-sm text-museum-black px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="primary" size="md">
              View Details
            </Button>
          </div>

          {/* Stats */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-4 text-white text-sm">
              <button
                className="flex items-center gap-1 hover:text-museum-red transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-museum-red' : ''}`} />
                <span>{likes}</span>
              </button>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{views}</span>
              </div>
            </div>
            <button className="text-white hover:text-museum-red transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <Typography variant="h6" font="coanda" color="primary" className="group-hover:text-museum-red transition-colors">
                {title}
              </Typography>
              <Typography variant="body-small" color="accent" className="font-medium">
                by {artist} • {year}
              </Typography>
            </div>
            {price && (
              <Typography variant="body" font="coanda" color="primary" className="font-semibold">
                {price}
              </Typography>
            )}
          </div>
          
          <div className="text-xs text-museum-medium space-y-1">
            <div>{medium}</div>
            <div>{dimensions}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-museum-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/l-intro-1733933490.jpg"
              alt="Art collections"
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
                Discover Art
              </Typography>
              
              <Typography
                variant="display"
                font="coanda"
                color="inverse"
                className="mb-6"
              >
                Collections
              </Typography>
              
              <Typography
                variant="body-large"
                color="inverse"
                className="mb-8 opacity-90"
              >
                Browse our extensive collection of artworks from talented artists around the world. 
                Each piece tells a unique story and represents the pinnacle of artistic achievement.
              </Typography>
            </motion.div>
          </Container>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-museum-white border-b border-museum-light">
          <Container size="xl" padding="lg">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-museum-medium w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search artworks or artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-museum-light rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-red focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 bg-museum-light rounded-lg p-2">
                <Filter className="w-4 h-4 text-museum-medium ml-2" />
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-museum-red text-white shadow-md'
                        : 'text-museum-black hover:bg-museum-white'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-museum-light rounded-lg p-2">
                <button
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-museum-red text-white' : 'text-museum-medium hover:text-museum-black'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-museum-red text-white' : 'text-museum-medium hover:text-museum-black'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Collections Grid/List */}
        <section className="py-20 bg-museum-light">
          <Container size="xl" padding="lg">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="body" color="secondary">
                Showing {filteredArtworks.length} artworks
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </Typography>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}`}
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                  : 'space-y-6'
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {filteredArtworks.map((artwork, index) => (
                  <ArtworkCard
                    key={artwork.id}
                    {...artwork}
                    viewMode={viewMode}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredArtworks.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" font="coanda" color="primary" className="mb-4">
                  No artworks found
                </Typography>
                <Typography variant="body" color="secondary" className="mb-8">
                  Try adjusting your search criteria or browse all collections.
                </Typography>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  View All Collections
                </Button>
              </motion.div>
            )}
          </Container>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
}