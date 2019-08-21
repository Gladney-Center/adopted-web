import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import PageContext from './context'
import Countup, { startAnimation } from 'react-countup'

export default () => {
	const data = useContext(PageContext)['components']['statblock']

	console.log(data)

	useEffect(() => {},[])

	return (
		<section className="adpt-stat-block">
			<adpt-inner>
				<adpt-stat-block id="adpt-sms-box">
					<h3>{data.title}</h3>
					<adpt-stats-grid>
						{data.stats.map((stat,i) => {
							return (
								<adpt-stats-cell>
									<span className="statNum">
										<h4>
											<Countup
												start={0}
												end={stat.num}
												delay={(i*.75)}
												suffix={stat.suffix}
												duration={2}
												useEasing={true}
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