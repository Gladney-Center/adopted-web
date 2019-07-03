import { useContext } from 'react'
import PageContext from '../components/context'
import Head from 'next/head'
import SVG from '../components/svg'

const Contact = props => {
    const cnt = useContext(PageContext)['contact']

    document.getElementById('__next').className = 'adpt-contact'

    return (
        <main className="adpt-contact">
            <Head>
                <title>Contact{/* meta.title */}</title>
            </Head>
            <adpt-stage>
                <adpt-inner>
                    <adpt-columns>
                        <adpt-column class="talk-box">
                            <SVG.Talkbox/>
                        </adpt-column>
                        <adpt-column class="adpt-column-collapse">
                            <form autocomplete="off" is="adpt-contact-form" text=""></form>
                        </adpt-column>
                    </adpt-columns>
                </adpt-inner>
            </adpt-stage>
            <adpt-contact class="adpt-contact">
                <adpt-inner class="adpt-contact-inner">
                    <figure className="adpt-postbox">
                        <SVG.Postbox/>
                    </figure>
                    <aside>
                        <h2>Need to send us something?</h2>
                        <address>
                        Mail to:
                        AdoptED
                        6300 John Ryan Dr.
                        Fort Worth, TX 76132
                        </address>
                    </aside>
                </adpt-inner>
            </adpt-contact>
        </main>
    )
}

export default Contact