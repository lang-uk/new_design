(() => {
	const inputContainer = document.querySelector('.header-input')
	const input = document.querySelector('.header-input__input')

	const toggler = () => input.classList.toggle('active')

	inputContainer.addEventListener('mouseover', () => toggler())
	inputContainer.addEventListener('mouseout', () => toggler())
})();