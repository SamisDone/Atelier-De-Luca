import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemDetails from "@/components/SystemDetails";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import SpecsTable from "@/components/SpecsTable";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <SystemDetails />
      <Features />
      <Stats />
      <SpecsTable />
      <Gallery />
      <Testimonials />
      <Calculator />
      <Contact />
      <Footer />
    </div>
  );
}
