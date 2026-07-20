import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import GoldCursor from '../components/GoldCursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import BrandStory from '../components/BrandStory';
import Craftsmanship from '../components/Craftsmanship';
import FeaturedPieces from '../components/FeaturedPieces';
import WhyUs from '../components/WhyUs';
import VideoSection from '../components/VideoSection';
import Lookbook from '../components/Lookbook';
import Testimonials from '../components/Testimonials';
import LimitedEdition from '../components/LimitedEdition';
import Instagram from '../components/Instagram';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-soft-white">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <GoldCursor />
      <Navbar />
      <Hero />
      <Collections />
      <BrandStory />
      <Craftsmanship />
      <FeaturedPieces />
      <WhyUs />
      <VideoSection />
      <Lookbook />
      <Testimonials />
      <LimitedEdition />
      <Instagram />
      <FAQ />
      <Footer />
    </div>
  );
}
