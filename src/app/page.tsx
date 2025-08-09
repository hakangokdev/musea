import React from 'react';
import { Header, Footer } from '@/components/layout';
import { Hero, Gallery } from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </main>
  );
}
