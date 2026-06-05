import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselProps {
	itemsCount: number;
	autoPlayInterval?: number;
	pauseDuration?: number;
}

const AUTO_PLAY_INTERVAL = 5000;
const PAUSE_DURATION = 5000;

export function useCarousel ({
	itemsCount,
	autoPlayInterval = AUTO_PLAY_INTERVAL,
	pauseDuration = PAUSE_DURATION
}: UseCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0); // 0 or 1 = right, -1 = left
	const [isPaused, setIsPaused] = useState(false);
	const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

	const resetAutoPlay = useCallback(() => {
		setIsPaused(true);
		if (pauseTimerRef.current) {
			clearTimeout(pauseTimerRef.current);
		}
		pauseTimerRef.current = setTimeout(() => {
			setIsPaused(false);
		}, pauseDuration);
	}, [pauseDuration]);

	const nextSlide = useCallback((isAuto = false) => {
		if (!isAuto) resetAutoPlay();
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % itemsCount);
	}, [itemsCount, resetAutoPlay]);

	const prevSlide = useCallback((isAuto = false) => {
		if (!isAuto) resetAutoPlay();
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
	}, [itemsCount, resetAutoPlay]);

	const goToSlide = useCallback((index: number) => {
		resetAutoPlay();
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	}, [currentIndex, resetAutoPlay]);

	useEffect(() => {
		const timer = setInterval(() => {
			if (!isPaused) {
				if (direction === -1) {
					prevSlide(true);
				} else {
					nextSlide(true);
				}
			}
		}, autoPlayInterval);

		return () => clearInterval(timer);
	}, [nextSlide, prevSlide, isPaused, direction, autoPlayInterval]);

	useEffect(() => {
		return () => {
			if (pauseTimerRef.current) {
				clearTimeout(pauseTimerRef.current);
			}
		};
	}, []);

	return {
		currentIndex,
		direction,
		nextSlide,
		prevSlide,
		goToSlide,
		resetAutoPlay,
	};
}
