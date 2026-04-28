import React from 'react';

export const scrollToSection = (e: React.MouseEvent, id: string) => {
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
};
