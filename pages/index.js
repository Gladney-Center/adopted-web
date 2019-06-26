import {Component,Fragment} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/page'
import SVG from '../components/svg'
import fbapp from '../utilities/firebase'

//console.log(process.env.NODE_ENV)

export default class Front extends Component {
    constructor(props) {
        super(props)

        this.state = {
            init: false
        }
    }

    componentDidMount() {
        this.itemsRef = fbapp.firestore().doc('/pages/front').onSnapshot((snap) => {
            this.setState({
                init: true,
                ...snap.data()
            })
        })
    }

    componentWillUnmount() {
        this.itemsRef()
    }

    render() {
        if (!this.state.init) return null

        let { content } = this.state
        return (
            <Page className="adpt-front-page">
                <Head>
                    <title>{this.state.title || 'AdoptED'}</title>
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
                        {content.block1.map((block) => (
                            <article className="adpt-panel">
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
                        ))}
                    </div>
                </section>
                <section className="adpt-ctas">
                    <div className="adpt-ctas-inner">
                        {content.ctas.map((cta) => {
                            let Icon = SVG[cta.icon]
                            return (
                            <div className="adpt-cta">
                                <div className="adpt-icon">
                                    <Icon/>
                                </div>
                                <div className="adpt-cta-text">
                                    <h5>{cta.title}</h5>
                                    <p>{cta.text}</p>
                                </div>
                                <div className="adpt-cta-more">
                                    <a className="btn" href="#">More</a>
                                </div>
                            </div>
                        )})}
                    </div>
                </section>
                <section className="adpt-panel-block">
                    <div className="adpt-panel-block-inner">
                        {content.block2.map((block) => (
                            <article className="adpt-panel">
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
                        ))}
                    </div>
                </section>
            </Page>
        )
    }
}