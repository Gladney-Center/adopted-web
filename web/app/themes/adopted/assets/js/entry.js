(() => {
	const qBubble = document.querySelector('.adpt-podcast'),
		mbIcon = document.querySelector('.adpt-mobile-menu-icon'),
		isInViewport = (elem) => elem.getBoundingClientRect().top < 800

	window.addEventListener(
		'scroll',
		(e) => isInViewport(qBubble) && qBubble.classList.add('active')
	)
	window.addEventListener(
		'animationend',
		(e) => {
			console.log(e)
		}
	)
	mbIcon.addEventListener(
		'click',
		(e) => {
			e.preventDefault()
			document.documentElement.classList.toggle('menu-open')
			document.body.classList.toggle('menu-open')
		}
	)
})()