import { useContext } from 'react'
import Link from 'next/link'
import PageContext from './context'

const AdptReferAFriend = props => {
	const data = useContext(PageContext)['components']['referafriend']

    return (
		<adpt-refer-a-friend id="referafriend">
			<h4>{data.title}</h4>
			<p>{data.text}</p>
			<p className="emphasis">{data.emphasis}</p>
			<p>
				<Link href="/contact">
					<a className="btn">Refer A Friend</a>
				</Link>
			</p>
		</adpt-refer-a-friend>
	)
}

export default AdptReferAFriend