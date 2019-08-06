import { useContext } from 'react'
import PageContext from './context'

const AdptReferAFriend = props => {
	const data = useContext(PageContext)['components']['referafriend']

    return (
		<adpt-refer-a-friend id="referafriend">
			<h4>{data.title}</h4>
			<p>{data.text}</p>
			<p className="emphasis">{data.emphasis}</p>
			<p>
				<a className="btn">Refer A Friend</a>
			</p>
		</adpt-refer-a-friend>
	)
}

export default AdptReferAFriend