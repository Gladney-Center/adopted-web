import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'
import AdptStudentsVids from '../components/AdptStudentsVids'
import AdptStatBlock from '../components/AdptStatBlock'

import { adptKeygen } from '../utilities/functions'

const Students = props => {
    const { meta, content } = useContext(PageContext)['students'],
        { footer, header } = useContext(PageContext)['common']

    document.getElementById('__next').className = 'adpt-students'

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
                            let El = el.el,
                                key = adptKeygen()
                            return <El key={key}>{el.text}</El>
                        })}
                    </div>
                </adpt-inner>
            </section>
            <AdptStudentsVids/>
            <AdptStatBlock/>
            <section className="adpt-app-pitch">
                <adpt-inner>
                    <adpt-columns>
                        <adpt-column>
                            <SVG.GabbyAndGuy/>
                        </adpt-column>
                        <adpt-column>
                            <h4>Have you ever wondered what you would do if faced with an unplanned pregnancy?</h4>
                            <h5>Walking in Her Shoes App</h5>
                            <p>Step into the life of Gabby, a teenager who finds herself unexpectedly pregnant, and help her walk through the courageous decision of how to best care for her child.</p>
                            <p>Download from the App Store or Google Play.</p>
                            <div className="studentsApps">
                                {header.app.apps.map((app,i) => (
                                    <div key={adptKeygen()} className="adpt-app-link">
                                        <a href={app.link}><i className={["fab",app.icon].join(' ')}></i></a>
                                    </div>
                                ))}
                            </div>
                        </adpt-column>
                    </adpt-columns>
                </adpt-inner>
            </section>
        </main>
    )
}

export default Students