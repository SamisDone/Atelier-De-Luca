"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
	const { messages } = useLanguage();

	return (
		<div className="w-full bg-background relative">
			<Navbar />
			<div className="relative">
				<motion.div
					className="absolute inset-0 -top-[20%] h-[120%] w-full z-0"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
				>
					<Image
						src={messages.hero.image.path}
						alt={messages.hero.image.alt}
						fill
						priority
						sizes="100vw"
						className="object-cover blur-sm object-center"
					/>
				</motion.div>
				<div className="absolute inset-0 bg-brand-tertiary/80 backdrop-blur-[2px] z-0" />

				<Hero />
				<About />
			</div>
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
