import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemDetails from "@/components/SystemDetails";
import SpecsTable from "@/components/SpecsTable";
import Gallery from "@/components/Gallery";
import Calculator from "@/components/Calculator";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SystemDetails />
      <Features />
      <SpecsTable />
      <Gallery />
      <Calculator />
      <Contact />
      <Footer />
    </div>
  );
}
