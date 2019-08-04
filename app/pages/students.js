import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'
import AdptStudentsVids from '../components/AdptStudentsVids'

const Students = props => {
    const { meta, content } = useContext(PageContext)['students']

    document.getElementById('__next').className = 'adpt-students'

    const angieAndJose = {__html: '<script src="https://fast.wistia.com/embed/medias/qx6z98rzv6.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_qx6z98rzv6 popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>'}

    return (
        <main className="adpt-students">
            <Head>
                <title>{meta.title}</title>
            </Head>
            <adpt-stage>
                <SVG.HeartBG/>
                <adpt-inner>
                    <h1>{content.stage.headline}</h1>
                </adpt-inner>
            </adpt-stage>
            <section className="adpt-fold">
                <adpt-inner>
                    <div className="adpt-fold-graybox">
                        {content.fold.text.map((el,l) => {
                            let El = el.el
                            return <El key={l+90}>{el.text}</El>
                        })}
                    </div>
                </adpt-inner>
            </section>
            <AdptStudentsVids/>
        </main>
    )
}

export default Students