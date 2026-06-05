'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import carouselData from '@/data/carousel.json';
import { useCarousel } from '@/hooks/useCarousel';

type CarouselImage = {
	src: string;
	alt: string;
};

const images = carouselData as CarouselImage[];

const DRAG_ELASTICITY = 0.2;
const SIZE_ARROW = 24;

export default function Carousel () {
	const {
		currentIndex,
		direction,
		nextSlide,
		prevSlide,
		goToSlide,
		resetAutoPlay
	} = useCarousel({ itemsCount: images.length });

	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};

	return (
		<section
			className="relative w-full max-w-(--breakpoint-lg) mx-auto aspect-4/3 overflow-hidden rounded-xl shadow-2xl group"
			aria-label="Image Carousel"
		>
			<motion.div
				className="flex h-full cursor-grab active:cursor-grabbing touch-none"
				animate={{ x: `-${currentIndex * 100}%` }}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 30,
					mass: 1,
					velocity: direction * 10
				}}
				drag="x"
				dragElastic={DRAG_ELASTICITY}
				onDragStart={() => resetAutoPlay()}
				onDragEnd={(e, { offset, velocity }) => {
					const swipe = swipePower(offset.x, velocity.x);
					if (swipe < -swipeConfidenceThreshold)
						nextSlide();
					else if (swipe > swipeConfidenceThreshold)
						prevSlide();
				}}
				role="list"
			>
				{images.map((image, index) => (
					<figure
						key={index}
						className="relative min-w-full h-full m-0"
						role="listitem"
						aria-roledescription="slide"
						aria-label={`${index + 1} of ${images.length}`}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							sizes="(max-width: 1200px) 100vw, 1200px"
							className="object-cover"
							priority={index === 0}
							draggable={false}
						/>
					</figure>
				))}
			</motion.div>

			{/* Navigation Arrows */}
			<nav aria-label="Carousel Navigation">
				<button
					onClick={() => prevSlide()}
					className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 outline-hidden focus-visible:ring-2 focus-visible:ring-white"
					aria-label="Previous slide"
				>
					<IoIosArrowBack size={SIZE_ARROW} aria-hidden="true"/>
				</button>
				<button
					onClick={() => nextSlide()}
					className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 outline-hidden focus-visible:ring-2 focus-visible:ring-white"
					aria-label="Next slide"
				>
					<IoIosArrowForward size={SIZE_ARROW} aria-hidden="true"/>
				</button>
			</nav>

			{/* Indicators */}
			<div
				className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2"
				role="tablist"
				aria-label="Slide selection"
			>
				{images.map((_, index) => (
					<button
						key={index}
						role="tab"
						aria-selected={index === currentIndex}
						aria-controls={`slide-${index}`}
						onClick={() => goToSlide(index)}
						className={`w-2 h-2 rounded-full transition-colors ${
							index === currentIndex ? 'bg-white' : 'bg-white/50'
						} hover:bg-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}