import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'
import AdptSocialIcons from '../components/AdptSocialIcons'
import AdptQBlock from '../components/AdptQBlock'
import PageWrapper from '../components/PageWrapper'

const AskAPro = props => {
    const { meta, content } = useContext(PageContext)['askapro']

    let a = 'a'

    document.getElementById('__next').className = 'adpt-askapro'

    return (
        <PageWrapper>
            <main className="adpt-askapro">
                <Head>
                    <title>{meta.title}</title>
                </Head>
                <adpt-stage class="adpt-stage">
                    <AdptQBlock/>
                </adpt-stage>
                <section className="adpt-fold">
                    <adpt-inner>
                        <div className="adpt-fold-graybox">
                            <AdptSocialIcons/>
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
                            <iframe src="//fast.wistia.net/embed/playlists/szxkdnbhhq?media_0_0%5BautoPlay%5D=false&media_0_0%5BcontrolsVisibleOnLoad%5D=false&theme=slide&version=v1&videoFoam=false&videoOptions%5BautoPlay%5D=true&videoOptions%5BinlineOptionsOnly%5D=true&videoOptions%5BplayerColor%5D=7E8FAD&videoOptions%5Bversion%5D=v1&videoOptions%5BvideoHeight%5D=360&videoOptions%5BvideoWidth%5D=640&videoOptions%5BvolumeControl%5D=true" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_playlist" name="wistia_playlist" allowFullScreen></iframe>
                        </div>
                    </adpt-inner>
                </section>
            </main>
        </PageWrapper>
    )
}

export default AskAPro