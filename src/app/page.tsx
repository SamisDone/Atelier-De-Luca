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

import { ScrollContainerProvider } from "@/components/ScrollContainerContext";

export default function Home() {
  return (
    <ScrollContainerProvider>
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
    </ScrollContainerProvider>
  );
}
