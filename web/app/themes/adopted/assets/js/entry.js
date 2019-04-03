(() => {
	const qBubble = document.querySelector('.adpt-podcast'),
		isInViewport = (elem) => elem.getBoundingClientRect().top < 600

	window.addEventListener('scroll', (e) => isInViewport(qBubble) &&qBubble.classList.add('active'))
})()