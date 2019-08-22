import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import PageContext from './context'
import SVG from './svg'

const isInViewport = () => {
	let el = document.querySelector('#qbubblecontainer'),
		rect = el !== null ? el.getBoundingClientRect() : { top: 401 }
	return rect.top <= 400
}

export default (props) => {
	let { button } = props,
		a = 'a'

	const data = useContext(PageContext)['components']['qblock'],
		[inView, setInView] = useState(false)

	useEffect(() => {
		if (isInViewport()) return setInView(true)

		window.addEventListener('scroll',(e) => {
			let iV = isInViewport()
			return (!iV) ? iV : (!inView) ? setInView(true) : null
		})
	},[inView])

	return (
		<adpt-qblock id="qbubblecontainer" class={inView ? 'active' : 'inactive'}>
			<adpt-inner>
				<adpt-qbubble-overlay class="adpt-qbubble-overlay">
					{[...Array(10)].map((x,i) => {
						let cls = a
						a = String.fromCharCode(a.charCodeAt() + 1)
						return (
							<div key={Math.ceil((Math.random()+i)*(Math.random()*660000000)).toString(36)} className={['qbubble-container','qb-a'+cls].join(' ')}>
								{(i % 2 == 0) ? <SVG.QBubbleLeft/> : <SVG.QBubbleRight/>}
							</div>
						)
					}
					)}
				</adpt-qbubble-overlay>
				<adpt-qblock-content class="heading">
					<h2>{data.heading}</h2>
				</adpt-qblock-content>
				<adpt-qblock-content class="spacer"></adpt-qblock-content>
				<adpt-qblock-content class="blurb">
					<adpt-qblock-content-inner>
						<h5>{data.blurb.subheading}</h5>
						<aside>{data.blurb.text}</aside>
						{(button) ? <Link href={data.blurb.link}>
							<a className="adpt-lm-btn btn">Learn More</a>
						</Link> : null}
					</adpt-qblock-content-inner>
				</adpt-qblock-content>
			</adpt-inner>
		</adpt-qblock>
	)
}