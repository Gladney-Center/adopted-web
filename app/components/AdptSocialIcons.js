import { useContext } from 'react'
import Link from 'next/link'
import PageContext from './context'

const AdptSocialIcons = props => {
	const data = useContext(PageContext)['components']['socialicons']

    return (
		<adpt-social-icons>
			{data.icons.map(icon => 
				<a href={icon.link}>
					<i title={icon.title} className={["fab", icon.icon].join(' ')}></i>
				</a>
			)}
			<Link href="/contact">
				<a>
					<i title="Takes you to the AdoptED Email Contact Form" class="fas fa-envelope"></i>
				</a>
			</Link>
		</adpt-social-icons>
	)
}

export default AdptSocialIcons