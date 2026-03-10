import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import Gallery from "@/components/Gallery";
import Financing from "@/components/Financing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Financing />
      <VideoShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
