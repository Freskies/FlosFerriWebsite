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
		const originalScrollBehavior = document.documentElement.style.scrollBehavior;
		document.documentElement.style.scrollBehavior = 'auto';
		window.scrollTo(0, 0);

		// Restore original scroll behavior (usually smooth scroll defined in CSS)
		document.documentElement.style.scrollBehavior = originalScrollBehavior;
	}, []);
}
