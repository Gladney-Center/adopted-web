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
                            </adpt-qblock-content-inner>
                        </adpt-qblock-content>
                    </adpt-inner>
                </adpt-qblock>
            </adpt-stage>
            <section className="adpt-fold">
                <adpt-inner>
                    <div className="adpt-fold-graybox">
                        <div>
                            <a href="https://www.facebook.com/GladneyAdoptED/">
                                <i title="AdoptED Facebook Page" class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/gladneyadopted/">
                                <i title="AdoptED Instagram Account" class="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i title="AdoptED Twitter Page" class="fab fa-twitter"></i>
                            </a>
                            <Link href="/contact">
                                <a>
                                    <i title="Takes you to the AdoptED Contact Form" class="fas fa-envelope"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </adpt-inner>
            </section>
            <section className="adpt-askapro-vids">
                <adpt-inner>
                    <aside>
                        <h4>{content.sidebar.headline}</h4>
                        <p>{content.sidebar.text}</p>
                    </aside>
                    <div>
                        <iframe src="//fast.wistia.net/embed/playlists/szxkdnbhhq?media_0_0%5BautoPlay%5D=false&media_0_0%5BcontrolsVisibleOnLoad%5D=false&theme=slide&version=v1&videoFoam=false&videoOptions%5BautoPlay%5D=true&videoOptions%5BinlineOptionsOnly%5D=true&videoOptions%5BplayerColor%5D=7E8FAD&videoOptions%5Bversion%5D=v1&videoOptions%5BvideoHeight%5D=360&videoOptions%5BvideoWidth%5D=640&videoOptions%5BvolumeControl%5D=true" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_playlist" name="wistia_playlist" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                    </div>
                </adpt-inner>
            </section>
        </main>
    )
}

export default AskAPro