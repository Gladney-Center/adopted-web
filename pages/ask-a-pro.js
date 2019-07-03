import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'

const AskAPro = props => {
    //const { meta, content } = useContext(PageContext)['front']

    document.getElementById('__next').className = 'adpt-askapro'

    return (
        <main className="adpt-askapro">
            <Head>
                <title>Ask A Pro | AdoptED - Adoption Education</title>
            </Head>
            <adpt-stage class="adpt-stage"></adpt-stage>
        </main>
    )
}

export default AskAPro