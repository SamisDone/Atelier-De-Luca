import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import Financing from "@/components/Financing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="w-full bg-background relative">
      <ScrollProgress />
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
