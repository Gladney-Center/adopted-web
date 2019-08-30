import { useRouter } from 'next/router'
import Portal from '../../components/Portal'
import fbapp from '../../utilities/firebase'

import { adptKeygen } from '../../utilities/functions'

const PortalPage = (props) => {

	const router = useRouter()

	return (
		<Portal>
			<main className="shmoop">
				<h3>{router.query.route}</h3>
			</main>
		</Portal>
	)
}

PortalPage.getInitialProps = async ({ req, res }) => {
	const firebs = await fbapp.firestore().collection('/classSections')

	let setNew = firebs.doc(adptKeygen()).set({
		name: 'Kathy'
	}).then(doc => {
		console.log(doc)
	}).catch(err => {
		console.log(err)
	})

	/* let getNew = firebs.doc('x').get()
	.then(doc => {
		console.log(doc)
	}).catch(err => {
		console.log(err)
	}) */

	return {
		data: [
			setNew
		]
	}
}

export default PortalPage