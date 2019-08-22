import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'
import AdoptEDSan from '../components/AdoptEDSan'
import AdptFAQ from '../components/AdptFAQ'
import AdptReferAFriend from '../components/AdptReferAFriend'
import AdptVidGrid from '../components/AdptVidGrid'

import { adptKeygen } from '../utilities/functions'

const Educators = props => {
    const { meta, content } = useContext(PageContext)['educators']

    document.getElementById('__next').className = 'adpt-educators'

    return (
        <main className="adpt-educators">
            <Head>
                <title>{meta.title || process.env.BASE_TITLE}</title>
            </Head>
            <adpt-stage>
                <adpt-inner>
                    <adpt-columns>
                        <adpt-column class="adpt-educator-anim">
                            <SVG.Clipboard/>
                        </adpt-column>
                        <adpt-column class="adpt-edu-headline">
                            <h1><AdoptEDSan str={content.stage.headline}/></h1>
                        </adpt-column>
                    </adpt-columns>
                </adpt-inner>
            </adpt-stage>
            <section className="adpt-fold">
                <adpt-inner>
                    <adpt-columns class="adpt-fold-graybox">
                        <adpt-column class="fold-headline">
                            <h2>{content.fold.headline}</h2>
                        </adpt-column>
                        <adpt-column class="fold-text">
                            <p>{content.fold.text}</p>
                        </adpt-column>
                    </adpt-columns>
                </adpt-inner>
            </section>
            <section className="adpt-perks-grid">
                <adpt-inner>
                    <h3>{content.perksGrid.headline}</h3>
                    <div>
                        {content.perksGrid.grid.map((grd,g) => {
                            let Icon = SVG[grd.icon],
                                key = adptKeygen()
                            return (
                                <article data-key={key} key={key}>
                                    <Icon/>
                                    <div>
                                        <h4>{grd.headline}</h4>
                                        <span>{grd.text}</span>
                                    </div>
                                </article>
                        )})}
                    </div>
                </adpt-inner>
            </section>
            <section className="adpt-perks-panels">
                {content.perksPanels.map((pan,p) => {
                    let key = adptKeygen()
                    return (
                        <article data-key={key} key={key}>
                            <h3><AdoptEDSan str={pan.headline}/></h3>
                            <span>{pan.text}</span>
                        </article>
                )})}
            </section>
            <section className="adpt-section-headline">
                <h3>{content.overview.headline}</h3>
                <p>{content.overview.text}</p>
            </section>
            <section className="adpt-ctas">
                <div className="adpt-ctas-inner">
                    <div className="adpt-cta">
                        <div className="adpt-icon">
                            <SVG.WritingBlock/>
                        </div>
                        <div className="adpt-cta-text">
                            <h5>Sample Lesson Plans</h5>
                            <p>AdoptED gives teachers the opportunity to pick and choose from our curriculum and customize according to their scheduling needs</p>
                        </div>
                        <div className="adpt-cta-more">
                            <a className="btn">More</a>
                        </div>
                    </div>
                    <div className="adpt-cta">
                        <div className="adpt-icon">
                            <SVG.Microphone/>
                        </div>
                        <div className="adpt-cta-text">
                            <h5>Ask A Pro</h5>
                            <p>"Ask A Pro" is all about meeting students where they are and answering those tough questions. Our team are full of relevant answers to important questions.</p>
                        </div>
                        <div className="adpt-cta-more">
                            <Link href="/ask-a-pro">
                                <a className="btn">More</a>
                            </Link>
                        </div>
                    </div>
                    <div className="adpt-cta">
                        <div className="adpt-icon">
                            <SVG.Megaphone/>
                        </div>
                        <div className="adpt-cta-text">
                            <h5>AdoptED Ambassador</h5>
                            <p>Educators sharing with peers about the AdoptED program are our biggest champions. We want to reward you for continuing to spread the word!</p>
                        </div>
                        <div className="adpt-cta-more">
                            <Link href="#referafriend">
                                <a className="btn">More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="videos">
                <adpt-inner>
                    <AdptVidGrid/>
                </adpt-inner>
            </section>
            <section className="adpt-educ-faq" id="faq">
                <adpt-inner>
                    <AdptFAQ/>
                </adpt-inner>
            </section>
            <AdptReferAFriend/>
        </main>
    )
}

export default Educators