import { useLayoutEffect, useRef } from 'react';

/**
 * A hook that applies a smooth height transition to a container when its dependencies change.
 *
 * @param dependencies - The dependencies that should trigger the height recalculation.
 * @returns A ref to be attached to the container that should have the smooth height.
 */
export function useSmoothHeight (dependencies: never[]) {
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (containerRef.current) {
			const container = containerRef.current;
			const previousHeight = container.offsetHeight;

			// Reset height to auto to get the new scrollHeight
			container.style.height = 'auto';
			const newHeight = container.scrollHeight;

			// Set back to previous height immediately (no transition yet)
			container.style.transition = 'none';
			container.style.height = `${previousHeight}px`;

			// Force reflow
			container.offsetHeight;

			// Apply new height with transition
			container.style.transition = 'height 0.7s ease-in-out';
			container.style.height = `${newHeight}px`;
		}
	}, dependencies);

	return containerRef;
}
