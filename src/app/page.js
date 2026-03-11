import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Carousel from '@/components/Carousel';
import DeepDives from '@/components/DeepDives';
import PrivacyBanner from '@/components/PrivacyBanner';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import AnimationsInit from '@/components/AnimationsInit';

export default function Home() {
  return (
    <>
      <AnimationsInit />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Carousel />
        <DeepDives />
        <PrivacyBanner />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
