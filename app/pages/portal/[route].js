import { useRouter } from 'next/router'

export default () => {
	const router = useRouter()

	return (
		<h1>{router.query.route}</h1>
	)
}