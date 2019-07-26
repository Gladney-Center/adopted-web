import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'
import AdoptEDSan from '../components/AdoptEDSan'

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
                            <h1>{content.stage.headline}</h1>
                        </adpt-column>
                    </adpt-columns>
                </adpt-inner>
            </adpt-stage>
            <section class="adpt-fold">
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
                            let Icon = SVG[grd.icon]
                            return (
                                <article>
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
                    let Icon = SVG[pan.bg]
                    return (
                        <article>
                            <Icon/>
                            <div>
                                <h4><AdoptEDSan str={pan.headline}/></h4>
                                <span>{pan.text}</span>
                            </div>
                        </article>
                )})}
            </section>
            <section class="adpt-section-headline">
                <h3>{content.overview.headline}</h3>
                <p>{content.overview.text}</p>
            </section>
            <section class="adpt-ctas">
                <div class="adpt-ctas-inner">
                    <div class="adpt-cta">
                        <div class="adpt-icon">
                            <SVG.WritingBlock/>
                        </div>
                        <div class="adpt-cta-text">
                            <h5>Sample Lesson Plans</h5>
                            <p>AdoptED gives teachers the opportunity to pick and choose from our curriculum and customize according to their scheduling needs</p>
                        </div>
                        <div class="adpt-cta-more">
                            <a class="btn" href="#">More</a>
                        </div>
                    </div>
                    <div class="adpt-cta">
                        <div class="adpt-icon">
                            <SVG.VideoBlock/>
                        </div>
                        <div class="adpt-cta-text">
                            <h5>Teaching AdoptED To-Go</h5>
                            <p>Check out our instructional video on best practices in teaching AdoptED To-Go to your students. Be sure and let us know what works best for you and your students!</p>
                        </div>
                        <div class="adpt-cta-more">
                        <a class="btn" href="#">More</a>
                        </div>
                    </div>
                    <div class="adpt-cta">
                    <div class="adpt-icon">
                        <SVG.StateBuilding/>
                    </div>
                    <div class="adpt-cta-text">
                    <h5>State Standards</h5>
                    <p>Our goal is to have AdoptED meet your State's curriculum standards</p>
                    </div>
                    <div class="adpt-cta-more">
                    <a class="btn" href="#">More</a>
                    </div>
                    </div>
                    <div class="adpt-cta">
                    <div class="adpt-icon">
                        <SVG.GladneyLogo/>
                    </div>
                    <div class="adpt-cta-text">
                    <h5>Gladney Site Visit</h5>
                    <p>Gladney exists to give children loving, caring families here at home and around the world. That's the heart of our mission.</p>
                    </div>
                    <div class="adpt-cta-more">
                    <a class="btn" href="#">More</a>
                    </div>
                    </div>
                    <div class="adpt-cta">
                    <div class="adpt-icon">
                        <SVG.Microphone/>
                    </div>
                    <div class="adpt-cta-text">
                    <h5>Ask A Pro Podcast</h5>
                    <p>Our Podcast is all about meeting students where they are and answering those tough questions. Our hosts, Kathryn & Haleigh, are a little quirky and filled with relevant answers to important questions.</p>
                    </div>
                    <div class="adpt-cta-more">
                    <a class="btn" href="#">More</a>
                    </div>
                    </div>
                    <div class="adpt-cta">
                    <div class="adpt-icon">
                        <SVG.Megaphone/>
                    </div>
                    <div class="adpt-cta-text">
                    <h5>AdoptED Ambassador</h5>
                    <p>Educators sharing with peers about the AdoptED program are our biggest champions. We want to reward you for continuing to spread the word!</p>
                    </div>
                    <div class="adpt-cta-more">
                    <a class="btn" href="#">More</a>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Educators