"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { useLanguage } from "@/i18n/LanguageContext";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8 },
	},
};

const Hero = () => {
	const ref = useRef(null);
	const { messages } = useLanguage();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	return (
		<section
			ref={ref}
			className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-20 md:pt-32"
		>
			<motion.div
				style={{ opacity }}
				className="relative z-10 container mx-auto px-6 text-left md:text-left max-w-5xl"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.p
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
					}}
					className="section-tagline"
				>
					{messages.hero.tagline}
				</motion.p>

				<motion.h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-brand-secondary leading-[1.1] md:leading-[0.95] mb-3 md:mb-6 tracking-tight text-balance">
					<motion.span
						className="inline-block overflow-hidden pb-1"
						initial={{ y: "100%" }}
						animate={{ y: 0 }}
						transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
					>
						{messages.hero.titleLine1}
					</motion.span>
					<br />
					<motion.span
						className="text-brand-secondary/90 inline-block overflow-hidden"
						initial={{ y: "100%", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
					>
						{messages.hero.titleLine2}
					</motion.span>
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className="text-brand-secondary/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mb-4 md:mb-8"
				>
					{messages.hero.description}
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row gap-4"
				>
					<Button
						variant="hero"
						size="lg"
						className="text-sm px-10"
						asChild
					>
						<a href="#gallery">{messages.hero.viewProjects}</a>
					</Button>
					<Button
						variant="hero-outline"
						size="lg"
						className="text-sm px-10"
						asChild
					>
						<a href="#contact">{messages.hero.contactUs}</a>
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
