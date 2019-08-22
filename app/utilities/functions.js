const adptKeygen = () => Math.random().toString(36).substr(2, 16)

const isInViewport = (selector='x', top=400) => {
	let el = document.querySelector(selector),
		rect = el !== null ? el.getBoundingClientRect() : { top: top+1 }
	return rect.top <= top
}

export { adptKeygen, isInViewport }