import { useContext } from 'react'
import PageContext from '../components/context'
import Head from 'next/head'
import SVG from '../components/svg'
import AdoptEDSan from '../components/AdoptEDSan'
import PageWrapper from '../components/PageWrapper'

const AdptToGo = props => {
    const { meta, content } = useContext(PageContext)['togo']

    document.getElementById('__next').className = 'adpt-to-go'

    return (
        <PageWrapper>
           <main className="adpt-to-go"></main> 
        </PageWrapper>
    )
}

export default AdptToGo