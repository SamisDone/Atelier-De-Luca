import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import VideoShowcase from "@/components/VideoShowcase";
import Gallery from "@/components/Gallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Stats />
      <VideoShowcase />
      <Gallery />
      <ProcessTimeline />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
