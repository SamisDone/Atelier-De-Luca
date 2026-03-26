"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
	const ref = useRef(null);
	const { messages } = useLanguage();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

	return (
		<section
			ref={ref}
			id="about"
			className="w-full flex flex-col items-center justify-center pt-14 pb-20 md:pt-16 md:pb-24 bg-brand-secondary overflow-hidden snap-start"
		>
			<div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-around pt-12 md:pt-16 pb-12">
				{/* Asymmetric two-column editorial layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
					{/* Left column — tagline & large heading */}
					<motion.div
						className="lg:col-span-5"
						style={{ y: textY }}
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						<p className="section-tagline">{messages.about.tagline}</p>
						<h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-brand-secondary leading-[0.9] tracking-tight text-balance">
							{messages.about.title}
						</h2>
					</motion.div>

					{/* Right column — descriptions, offset downward for asymmetry */}
					<motion.div
						className="lg:col-span-7 space-y-4"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
					>
						<p className="text-brand-secondary/85 max-w-xl">
							{messages.about.description1}
						</p>
						<p className="text-brand-secondary/85 max-w-xl">
							{messages.about.description2}
						</p>
					</motion.div>
				</div>

				{/* Stats row with staggered reveal */}
				<motion.div
					className="grid grid-cols-3 gap-4 md:gap-6 border-t border-brand-secondary/15 pt-8 mt-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
					}}
				>
					{messages.about.stats.map((stat, idx) => (
						<motion.div
							key={idx}
							variants={{
								hidden: { opacity: 0, y: 30, scale: 0.9 },
								visible: {
									opacity: 1,
									y: 0,
									scale: 1,
									transition: { type: "spring", stiffness: 80, damping: 15 },
								},
							}}
							className="text-center"
						>
							<p
								translate="no"
								className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-brand-secondary font-bold mb-1 tracking-tight"
							>
								{stat.value}
							</p>
							<p className="text-brand-secondary/45 text-xs tracking-widest uppercase">
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Skewed bottom divider */}
			<div
				className="absolute bottom-0 left-0 right-0 h-24 bg-background z-20"
				style={{ clipPath: "polygon(0 98%, 123% 0, 100% 100%, 0 100%)" }}
			/>
		</section>
	);
};

export default About;
