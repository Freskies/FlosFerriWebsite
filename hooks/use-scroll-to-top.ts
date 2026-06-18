import { useEffect } from 'react';

/**
 * Custom hook to manage scroll restoration and force scroll-to-top on mount.
 * This ensures the page starts at the very top without animation when first loaded or refreshed.
 */
export function useScrollToTop () {
	useEffect(() => {
		// Disable automatic scroll restoration by the browser
		if ('scrollRestoration' in window.history)
			window.history.scrollRestoration = 'manual';

		// Temporarily disable smooth scroll to perform an instant jump to the top
		const html = document.documentElement;
		const originalScrollBehavior = html.style.scrollBehavior;

		html.style.scrollBehavior = 'auto';
		window.scrollTo(0, 0);

		// Also check for data-scroll-behavior and temporarily remove it
		const originalDataScrollBehavior = html.getAttribute('data-scroll-behavior');
		if (originalDataScrollBehavior) {
			html.removeAttribute('data-scroll-behavior');
		}

		// Force a reflow to ensure the scroll happens immediately with 'auto' behavior
		void html.offsetHeight;

		// Restore original scroll behavior in the next frame
		const timeoutId = setTimeout(() => {
			html.style.scrollBehavior = originalScrollBehavior;
			if (originalDataScrollBehavior) {
				html.setAttribute('data-scroll-behavior', originalDataScrollBehavior);
			}
		}, 0);

		return () => clearTimeout(timeoutId);
	}, []);
}
