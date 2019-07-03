import { useContext } from 'react'
import PageContext from '../components/context'
import Head from 'next/head'
import SVG from '../components/svg'

const About = props => {
    const { meta, content } = useContext(PageContext)['about']

    document.getElementById('__next').className = 'adpt-about'

    return (
        <main className="adpt-about">
            <Head>
                <title>{meta.title}</title>
            </Head>
            <adpt-stage>
                <adpt-inner>
                    <adpt-columns>
                        <adpt-column class="adpt-about-icon">
                            <SVG.Educated/>
                        </adpt-column>
                        <adpt-column class="adpt-about-headline">
                            <h1>{content.stage.headline}</h1>
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
                            <p className="emphasis">{content.fold['text-emphasis']}</p>
                            <p>{content.fold['text-p1']}</p>
                            <p>{content.fold['text-p2']}</p>
                        </adpt-column>
                    </adpt-columns>
                </adpt-inner>
            </section>
            <section className="adpt-about-blurb">
                <h3>{content.blurb.headline}</h3>
                <SVG.GladneyLogo/>
                <article>{content.blurb.text}</article>
            </section>
            <adpt-team-bio>
                {content.teambio.map((person) => (
                    <figure>
                        <img src={person.image} alt={person.name}/>
                        <figcaption>{person.bio}</figcaption>
                    </figure>
                ))}
            </adpt-team-bio>
        </main>
    )
}

export default About