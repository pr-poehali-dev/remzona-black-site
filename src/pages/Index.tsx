import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Booking from '@/components/Booking';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-rz-black">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Blog />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}
