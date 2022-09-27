import { tns } from 'tiny-slider'
import { BREAKPOINTS } from '../constants.js'


<<<<<<< HEAD
export const initSliders = () => {
	// Slider
	const sliders = document.querySelectorAll('.slider');

	sliders&&sliders.length&&sliders.forEach(item => {
		tns({
			container: item,
			items: 1,
			slideBy: 1,
			nav: true,
			navPosition: 'bottom',
			autoplayButtonOutput: false,
			mouseDrag: true,
			autoplay: true,
			controls: false,
			speed: 500,
			responsive: {
				[BREAKPOINTS.XS]: {
				items: 1
				},
				[BREAKPOINTS.SM]: {
					items: 2,
				},
				[BREAKPOINTS.MD]: {
					items: 3,
				},
=======
	tns({
		container: item,
		items: 1,
		slideBy: 1,
		nav: true,
		navPosition: 'bottom',
		autoplayButtonOutput: false,
		mouseDrag: true,
		autoplay: true,
		controls: false,
		speed: 500,
		responsive: {
			[BREAKPOINTS.XS]: {
				items: 1
			},
			[BREAKPOINTS.SM]: {
				items: 2,
			},
			[BREAKPOINTS.MD]: {
				items: 3,
>>>>>>> 85d2e0d62a90d9ecfd96750629c17bb8d017cf80
			},
		})
	})
}