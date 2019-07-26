import { useContext } from 'react'
import PageContext from '../components/context'
import Head from 'next/head'
import SVG from '../components/svg'
import AdoptEDSan from '../components/AdoptEDSan'

const AdptToGo = props => {
    const { meta, content } = useContext(PageContext)['togo']

    document.getElementById('__next').className = 'adpt-to-go'

    return (
        <main className="adpt-to-go"></main>
    )
}

export default AdptToGo