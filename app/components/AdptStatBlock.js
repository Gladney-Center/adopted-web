import { useEffect, useContext } from 'react'
import Link from 'next/link'
import PageContext from './context'

export default () => {
	const data = useContext(PageContext)['components']['smsstats']

	useEffect(() => {},[])

	return (
		<section className="adpt-stat-block">
			<adpt-inner>
				<adpt-stat-block id="adpt-sms-box">
					<div className="adpt-sms-arrow teal-bg"><i className="fas fa-angle-right"></i></div>
					<div className="adpt-sms-text">
						<div id="adpt_sms" className="sms">
							<div id="sms-inner">
								<h5></h5>
							</div>
						</div>
						<div className="send"><i className="fas fa-long-arrow-alt-up"></i></div>
					</div>
				</adpt-stat-block>
			</adpt-inner>
		</section>
	)
}