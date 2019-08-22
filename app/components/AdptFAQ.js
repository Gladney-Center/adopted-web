import { useContext } from 'react'
import AdoptEDSan from './AdoptEDSan'
import PageContext from './context'

import { adptKeygen } from '../utilities/functions'

const AdptFAQ = props => {

	const data = useContext(PageContext)['components']['faq'],
		col1 = [], col2 = []

	data.data.map((qa,r) => {
		let key = adptKeygen()
		if (r < 4) {
			col1.push(<p data-key={key} key={key}>
				<span className="question">{qa.q}</span>
				<span className="answer">{qa.a}</span>
			</p>)
		} else {
			col2.push(<p data-key={key} key={key}>
				<span className="question">{qa.q}</span>
				<span className="answer">{qa.a}</span>
			</p>)
		}
	})

	return (
		<adpt-faq className="adpt-faq" id="faq">
			<h5>{data.title}</h5>
			<adpt-columns>
				<adpt-column>{col1}</adpt-column>
				<adpt-column>{col2}</adpt-column>
			</adpt-columns>
		</adpt-faq>
	)
}

export default AdptFAQ