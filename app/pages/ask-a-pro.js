import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'

const AskAPro = props => {
    const { meta, content } = useContext(PageContext)['askapro']

    let a = 'a'

    document.getElementById('__next').className = 'adpt-askapro'

    return (
        <main className="adpt-askapro">
            <Head>
                <title>{meta.title}</title>
            </Head>
            <adpt-stage class="adpt-stage">
                <adpt-qblock id="askaproqbubble" class="active">
                    <adpt-inner>
                        <adpt-qbubble-overlay class="adpt-qbubble-overlay">
                            {[...Array(10)].map((x,i) => {
                                let cls = a
                                a = String.fromCharCode(a.charCodeAt() + 1)
                                return (
                                    <div key={Math.ceil((Math.random()+i)*(Math.random()*660000000)).toString(36)} className={['qbubble-container','qb-a'+cls].join(' ')}>
                                        {(i % 2 == 0) ? <SVG.QBubbleLeft/> : <SVG.QBubbleRight/>}
                                    </div>
                                )
                            }
                            )}
                        </adpt-qbubble-overlay>
                        <adpt-qblock-content class="heading">
                            <h2>{content.qblock.heading}</h2>
                        </adpt-qblock-content>
                        <adpt-qblock-content class="spacer"></adpt-qblock-content>
                        <adpt-qblock-content class="blurb">
                            <adpt-qblock-content-inner>
                                <h5>{content.qblock.blurb.subheading}</h5>
                                <aside>{content.qblock.blurb.text}</aside>
                                <Link href={void(0)}>
                                    <a className="btn">Learn More</a>
                                </Link>
                            </adpt-qblock-content-inner>
                        </adpt-qblock-content>
                    </adpt-inner>
                </adpt-qblock>
            </adpt-stage>
        </main>
    )
}

export default AskAPro