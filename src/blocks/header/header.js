import gsap from 'gsap';

export const initHeader = () => {
	const searchForms = document.querySelectorAll('.search-form')

	searchForms&&searchForms.length&&searchForms.forEach((form) => {
		const input = form.querySelector('.search-form__input');
		const button = form.querySelector('.search-form__button');
		const result = form.querySelector('.search-form__result');

		form.addEventListener('mouseover', () => {
			form.classList.add('active')
		})

		form.addEventListener('mouseleave', () => {
			if (!input.value.length) form.classList.remove('active')
		})

		document.addEventListener('click', e => {
			if (e.target !== form && !form.contains(e.target)) {
				form.classList.remove('active')
			}
		})

		input&&input.addEventListener('keydown', e => {
			if (e.keyCode == 13) button&&button.click();
		});

		input&&input.addEventListener('input', e => {
			if (result) {
				(input.value.length) ? result.classList.add('active') : result.classList.remove('active')
			}
		});
	})


	// для выпадающего меню
	const productsToggle = document.querySelector('.navigation__link--toggle');

	if (productsToggle) {
		const productsWrapper = productsToggle.parentNode

		productsToggle.addEventListener('click', () => {
			if (window.innerWidth < 992) productsWrapper.classList.toggle('open')
		})
	}


	// для кнопки меню в адаптиве
	const body = document.querySelector('body');
	const header = document.querySelector('.header');
	const navList = document.querySelector('.header__navigation');
	const burger = document.querySelector('.header__burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('is__active')
		navList.classList.toggle('active')
		if (burger.classList.contains('is__active')) {
			navList.classList.add('active');
			gsap.set([body], { 'overflow': 'hidden' })
		} else {
			navList.classList.remove('active');
			gsap.set([body], { 'overflow': '' })
		}
	})

}

export const initHeaderTransition = () => {
	const searchForms = document.querySelectorAll('.search-form')
	searchForms&&searchForms.length&&searchForms.forEach((form) => {
		form.classList.remove('active')
	})

	// для кнопки меню в адаптиве
	const body = document.querySelector('body');
	const header = document.querySelector('.header');
	const navList = document.querySelector('.header__navigation');
	const burger = document.querySelector('.header__burger');
	burger.classList.remove('is__active')
	navList.classList.remove('active')
	gsap.set([body], { 'overflow': '' })


}