(() => {
	const qBubble = document.querySelector('.adpt-podcast'),
		mbIcon = document.querySelector('.adpt-mobile-menu-icon'),
		isInViewport = (elem) => elem.getBoundingClientRect().top < 800

	window.addEventListener('scroll', (e) => isInViewport(qBubble) && qBubble.classList.add('active'))
	mbIcon.addEventListener('click', (e) => document.body.classList.toggle('menu-open'))
})()