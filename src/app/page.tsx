import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Craftmenship from "@/components/pages/home/Craftmenship";
import Financing from "@/components/pages/home/Financing";
import Gallery from "@/components/pages/home/Gallery";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Testimonials from "@/components/pages/home/Testimonials";

export default function Home() {
  return (
    <div className="w-full bg-background relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Financing />
      <Craftmenship />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
