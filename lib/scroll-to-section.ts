import React from 'react';

/**
 * Smoothly scrolls to a specific section of the page by its ID.
 * If the ID is 'top', it scrolls to the very top of the window.
 *
 * @param e - The mouse event from the click that triggered the scroll.
 * @param id - The HTML ID of the target section.
 */
export function scrollToSection (e: React.MouseEvent, id: string): void {
	e.preventDefault();
	if (id === 'top') {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	} else {
		const element = document.getElementById(id);
		const body = document.querySelector("body");
		if (element && body) {
			const offset = 80;
			const bodyRect = body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}
}
