import { useContext } from 'react'
import PageContext from '../components/context'
import Head from 'next/head'
import router from 'next/router'
import SVG from '../components/svg'
import ContactForm from '../components/ContactForm'
import PageWrapper from '../components/PageWrapper'

const storeSubmitted = () => {
    sessionStorage.setItem('formSubmitted','1')
}

const Contact = props => {
    const { meta, content } = useContext(PageContext)['contact'],
        submitted = typeof router.query.submitted !== 'undefined'

    document.getElementById('__next').className = 'adpt-contact'

    return (
        <PageWrapper>
            <main className="adpt-contact">
                <Head>
                    <title>{meta.title}</title>
                    {`<!--[if lte IE 8]>`}
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
                    {`<![endif]-->`}
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
                </Head>
                <adpt-stage>
                    <adpt-inner>
                        <adpt-columns>
                            <adpt-column class="talk-box">
                                <SVG.Talkbox/>
                            </adpt-column>
                            <adpt-column class="adpt-column-collapse">
                                <ContactForm data={content.form}/>
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
                            Mail to:<br/>
                            AdoptED<br/>
                            6300 John Ryan Dr.<br/>
                            Fort Worth, TX 76132<br/>
                            </address>
                        </aside>
                    </adpt-inner>
                </adpt-contact>
            </main>
        </PageWrapper>
    )
}

export default Contact