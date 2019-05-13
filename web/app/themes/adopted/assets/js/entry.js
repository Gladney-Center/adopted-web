import './components/stage'
import './components/contactform'
import './components/teambio'

(() => {

	const qBubble = document.querySelector('.adpt-podcast'),
		mbIcon = document.querySelector('.adpt-mobile-menu-icon')

	const funcs = {
		isInViewport: (elem) => elem.getBoundingClientRect().top < 800
	}

	if (qBubble) window.addEventListener(
		'scroll',
		(e) => funcs.isInViewport(qBubble) && qBubble.classList.add('active')
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