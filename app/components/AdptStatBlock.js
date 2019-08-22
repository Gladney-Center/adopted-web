import { useEffect, useState, useContext } from 'react'
import PageContext from './context'
import Countup, { startAnimation } from 'react-countup'

import { adptKeygen, isInViewport } from '../utilities/functions'

export default () => {
	const data = useContext(PageContext)['components']['statblock'],
		[inView, setInView] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll',(e) => {
			let iV = isInViewport('#adptstatblock', 600)
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
							let endNum = inView ? stat.num : 0,
								key = adptKeygen()
							return (
								<adpt-stats-cell key={key} data-key={key}>
									<span className="statNum" key={key}>
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