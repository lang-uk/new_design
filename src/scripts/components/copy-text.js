(() => {
	const container = document.getElementsByClassName('copy')

	Array.from(container).forEach(item => {
		const btn = item.getElementsByClassName('copy__button')[0]
		const text = item.getElementsByClassName('copy__text')[0]
		btn.addEventListener('click', () => {
			window.navigator.clipboard.writeText(text.textContent)
		})
	})
})()

