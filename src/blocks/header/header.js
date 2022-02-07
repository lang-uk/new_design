(() => {
	const inputContainer = document.querySelector('.header-input')
	const input = document.querySelector('.header-input__input')

	const toggler = () => input.classList.toggle('active')

	inputContainer.addEventListener('mouseover', () => toggler())
	inputContainer.addEventListener('mouseout', () => toggler())


// для кнопки меню в адаптиве

const header = document.querySelector('.header');
const navList = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__burger');
	burger.onclick = function () {
		this.classList.toggle('is__active')
		if (this.classList.contains('is__active')) {
			navList.classList.add('active');
			// header.style.overflow = 'unset';
		} else {
			navList.classList.remove('active');
			// header.style.overflow = 'hidden';
		}
	}
})();