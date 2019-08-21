import Head from 'next/head'
import AdptStatBlock from '../components/AdptStatBlock'

export default () => {

    document.getElementById('__next').className = 'adpt-test'

    return (
        <main className="adpt-educators">
            <Head>
                <title>Test</title>
            </Head>
            <adpt-stage style={{paddingBottom: "2em",marginBottom: "0"}}>
                <adpt-inner>
					<h1>Test Page</h1>
				</adpt-inner>
			</adpt-stage>
			<AdptStatBlock/>
		</main>
	)
}