import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'
import AdptQBlock from '../components/AdptQBlock'
import AdptStatBlock from '../components/AdptStatBlock'
import PageWrapper from '../components/PageWrapper'

const Front = props => {
    const { meta, content } = useContext(PageContext)['front']

    document.getElementById('__next').className = 'adpt-front-page'

    return (
        <PageWrapper>
            <main className="adpt-front-page">
                <Head>
                    <title>{meta.title || process.env.BASE_TITLE}</title>
                </Head>
                <adpt-stage class="adpt-stage">
                    <div className="adpt-stage-inner">
                        <div className="adpt-stage-column">
                            <h1>{content.stage.headline || 'headline'}</h1>
                        </div>
                        <div className="adpt-stage-column">
                            <figure className="adpt-block-anim">
                                <SVG.GabbyAnim/>
                            </figure>
                        </div>
                    </div>
                </adpt-stage>
                <section className="adpt-fold">
                    <adpt-inner>
                        <div className="adpt-fold-graybox">
                            <p>{content.fold.text}</p>
                            <a className="btn" href={content.fold.link}>Learn More</a>
                        </div>
                    </adpt-inner>
                </section>
                <section className="adpt-panel-block">
                    <div className="adpt-panel-block-inner">
                        {content.block1.map((block,i) => {
                            let key = Math.ceil((Math.random()+i)*(Math.random()*500000000)).toString(36)
                            return (
                                <article data-key={key} key={key} className="adpt-panel">
                                    <Link href={block.link}>
                                        <a>
                                            <figure className="wp-block-image"><img className="w-constrained" src={block.image} alt={block.text} /></figure>
                                            <div className="adpt-panel-overlay">
                                                <div className="adpt-panel-topright">
                                                    <SVG.RightArrow/>
                                                    <span className="adpt-panel-vert">Learn More</span>
                                                </div>
                                                <div className="adpt-panel-info">
                                                    <h4>{block.title}</h4>
                                                    <p>{block.text}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </article>
                                )
                            }
                        )}
                    </div>
                </section>
                <AdptQBlock button={true}/>
                <section className="adpt-ctas">
                    <div className="adpt-ctas-inner">
                        {content.ctas.map((cta,i) => {
                            let Icon = SVG[cta.icon],
                                key = Math.ceil((Math.random()+i)*(Math.random()*600000000)).toString(36)

                            return (
                                <div data-key={key} key={key} className="adpt-cta">
                                    <div className="adpt-icon">
                                        <Icon/>
                                    </div>
                                    <div className="adpt-cta-text">
                                        <h5>{cta.title}</h5>
                                        <p>{cta.text}</p>
                                    </div>
                                    <div className="adpt-cta-more">
                                        <Link href={cta.link}>
                                            <a className="btn">More</a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                    <AdptStatBlock/>
                <section className="adpt-panel-block">
                    <div className="adpt-panel-block-inner">
                        {content.block2.map((block,i) => {
                            let key = Math.ceil((Math.random()+i)*(Math.random()*700000000)).toString(36)
                            return (
                            <article data-key={key} key={key} className="adpt-panel">
                                <a href={block.link}>
                                    <figure className="wp-block-image"><img className="w-constrained" src={block.image} alt={block.text} /></figure>
                                    <div className="adpt-panel-overlay">
                                        <div className="adpt-panel-topright">
                                            <SVG.RightArrow/>
                                            <span className="adpt-panel-vert">Learn More</span>
                                        </div>
                                        <div className="adpt-panel-info">
                                            <h4>{block.title}</h4>
                                            <p>{block.text}</p>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        )})}
                    </div>
                </section>
            </main>
        </PageWrapper>
    )
}

export default Front