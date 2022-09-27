export const initCopyText = () => {
	const copyLinks = document.querySelectorAll('.copy')

	copyLinks&&copyLinks.length&&copyLinks.forEach((item) => {
		const btn = item.querySelector('.copy__button')
		const text = item.querySelector('.copy__text')

		btn&&text&&btn.addEventListener('click', () => {
			console.log(text.textContent)
			window.navigator.clipboard.writeText(text.textContent)
		})
<<<<<<< HEAD
	});
}
=======
	})
})()
>>>>>>> 85d2e0d62a90d9ecfd96750629c17bb8d017cf80
