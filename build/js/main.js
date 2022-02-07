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
(() => {
  const btn = document.querySelectorAll('.button-wave')

  btn.forEach(element => element.addEventListener('mouseenter', function () {

    const wave = document.createElement('span')
    wave.classList.add('button-wave__wave')
    this.prepend(wave)
    setTimeout(() => {
      wave.classList.add('button-wave__restore')
      // wave.style.transform = 'scale(250)'
    }, 1)
  }))

  btn.forEach(element => element.addEventListener('mousemove', function (e) {

    let a = this.offsetTop - window.scrollY
    let b = this.offsetLeft - window.scrollX
    let c = Math.round(e.clientX - b)
    let d = Math.round(e.clientY - a)
    let i = this.getElementsByClassName('button-wave__restore');

    Array.from(i).forEach(element => {
      element.style.left = `${c}px`
      element.style.top = `${d}px`
    })

  }))

  btn.forEach(element => element.addEventListener('mouseleave', function () {
    const wave = document.getElementsByClassName('button-wave__wave')
    if (wave) {
      Array.from(wave).forEach(element => element.remove())
    }
  }))

})();