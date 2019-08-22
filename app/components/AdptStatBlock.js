import { useEffect, useState, useContext } from 'react'
import PageContext from './context'
import Countup, { startAnimation } from 'react-countup'

const isInViewport = () => {
	let el = document.querySelector('#adptstatblock'),
		rect = el !== null ? el.getBoundingClientRect() : { top: 601 }
	return rect.top <= 600
}

export default () => {
	const data = useContext(PageContext)['components']['statblock'],
		[inView, setInView] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll',(e) => {
			let iV = isInViewport()
			return (!iV) ? iV : (!inView) ? setInView(true) : null
		})
	},[inView])

	return (
		<section className="adpt-stat-block">
			<adpt-inner>
				<adpt-stat-block id="adptstatblock">
					<h2>{data.title}</h2>
					<adpt-stats-grid>
						{data.stats.map((stat,i) => {
							let endNum = inView ? stat.num : 0
							return (
								<adpt-stats-cell>
									<span className="statNum">
										<h4>
											<Countup
												start={0}
												end={endNum}
												delay={(i*.5)}
												suffix={stat.suffix}
												duration={5}
											/>
										</h4>
									</span>
									<span className="statText">
										{stat.text}
									</span>
								</adpt-stats-cell>
							)
						})}
					</adpt-stats-grid>
				</adpt-stat-block>
			</adpt-inner>
		</section>
	)
}