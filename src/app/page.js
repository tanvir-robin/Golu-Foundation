'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import School from '@/components/sections/School';
import Environment from '@/components/sections/Environment';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <School />
      <Environment />
      <Contact />
      <Footer />
    </main>
  );
}
