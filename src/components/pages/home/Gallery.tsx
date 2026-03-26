"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const Gallery = () => {
	const [active, setActive] = useState("All");
	const { messages } = useLanguage();

	const projects = messages.gallery.projects;

	const categories = [
		messages.gallery.filterAll,
		...new Set(projects.map((p) => p.category)),
	];
	const filtered =
		active === messages.gallery.filterAll
			? projects
			: projects.filter((p) => p.category === active);

	return (
		<section
			id="gallery"
			className="relative w-full flex flex-col items-center justify-center pt-12 md:pt-20 bg-background overflow-hidden snap-start"
		>
			<div className="w-full flex flex-col pt-8 md:pt-12 pb-8 relative z-10">
				{/* Header section with container */}
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="mb-6 flex flex-col items-start"
					>
						<p className="section-tagline">{messages.gallery.tagline}</p>
						<h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground mb-4 leading-[0.95] tracking-tight">
							{messages.gallery.title}
						</h2>
						<p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
							{messages.gallery.description}
						</p>
					</motion.div>

					{/* Filter pills */}
					<div className="flex flex-wrap gap-2 mb-10">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActive(cat)}
								className={cn(
									"px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 border",
									active === cat
										? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
										: "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground",
								)}
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				{/* Grid layout showing all images */}
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filtered.map((project, idx) => (
							<div
								key={`${project.title}-${idx}`}
								className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
							>
								<Image
									src={project.image}
									alt={project.title}
									fill
									translate="no"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
								/>
								{/* Premium gradient overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-t text-white from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-7">
									<p className="text-xs tracking-[0.3em] uppercase mb-1.5">
										{project.category}
									</p>
									<h3 className="font-serif text-2xl md:text-3xl leading-tight">
										{project.title}
									</h3>
									<p className="text-white/60 text-sm mt-1">
										{project.location}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
