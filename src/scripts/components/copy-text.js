(() => {
	const container = document.getElementsByClassName('copy-container')

	Array.from(container).forEach(item => {
		const btnContainer = item.getElementsByClassName('copy-btn-container')[0]
		const btn = btnContainer.getElementsByClassName('copy-btn')[0]
		const successText = btnContainer.getElementsByClassName('copy-notification-text')[0]
		const text = item.getElementsByClassName('copy-text')[0]
		btn.addEventListener('click', () => {
			window.navigator.clipboard.writeText(text.textContent).then(
				() => {
					console.log('Copied')
				}, () => {
					console.log('Nea')
				}
			)
		})
	})
})()

