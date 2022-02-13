import { tns } from 'tiny-slider'
import { BREAKPOINTS } from '../constants.js'

// Slider
document.querySelectorAll('.slider').forEach(item => {

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
		},
	})
})
