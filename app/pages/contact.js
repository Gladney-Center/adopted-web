import { useContext } from 'react'
import PageContext from '../components/context'
import Head from 'next/head'
import Link from 'next/link'
import SVG from '../components/svg'

import router from 'next/router'

const Contact = props => {
    const { meta, content } = useContext(PageContext)['contact'],
        submitted = typeof router.query.submitted !== 'undefined'

    document.getElementById('__next').className = 'adpt-contact'

    return (
        <main className="adpt-contact">
            <Head>
                <title>{meta.title}</title>
            </Head>
            <adpt-stage>
                <adpt-inner>
                    <adpt-columns>
                        <adpt-column class="talk-box">
                            <SVG.Talkbox/>
                        </adpt-column>
                        <adpt-column class="adpt-column-collapse">
                            <form action="/" role="form" onSubmit={(e) => {
                                e.preventDefault() 
                                let form = new FormData(e.target),
                                    obj = {}
                                for (let pair of form.entries()) {
                                    obj[pair[0]] = pair[1]
                                }
                                console.log(obj)
                            }}>
                                <header className="adpt-form-header">
                                    <h1>{content.form.heading}</h1>
                                    <main className="top-text">{content.form.text}</main>
                                </header>
                                <fieldset>
                                    <section className="form-fields">
                                        <div className="adpt-form-input">
                                            <input type="text" required validation="email|tel" name="firstname" aria-label="First Name"/>
                                            <label aria-hidden="true" className="floating" htmlFor="firstname">First Name</label>
                                        </div>
                                        <div className="adpt-form-input">
                                            <input type="text" required validation="email|tel" name="lastname" aria-label="Last Name"/>
                                            <label aria-hidden="true" className="floating" htmlFor="lastname">Last Name</label>
                                        </div>
                                        <div className="adpt-form-input">
                                            <input type="email" required validation="email|tel" name="email" aria-label="Email Address"/>
                                            <label aria-hidden="true" className="floating" htmlFor="email">Email Address</label>
                                        </div>
                                        <div className="adpt-form-input">
                                            <input type="tel" required validation="tel" name="phone" aria-label="Phone Number"/>
                                            <label aria-hidden="true" className="floating" htmlFor="phone">Phone Number</label>
                                        </div>
                                    </section>
                                </fieldset>
                                <fieldset>
                                    <section className="form-options">
                                        <div className="adpt-form-input no-bg">
                                            <input type="checkbox" aria-label="I'm interested in AdoptED To-Go" name='adpt2go' value="1"/>
                                            <label aria-hidden="true" className="checkbox" htmlFor="adpt2go">I'm interested in AdoptED To-Go</label>
                                        </div>
                                        <div className="adpt-form-input no-bg">
                                            <input type="checkbox" aria-label="I'm interested in a classNameroom presentation (DFW only)" name="adptclassName" value="1"/>
                                            <label aria-hidden="true" className="checkbox" htmlFor="adptclassName">I'm interested in a classroom presentation (DFW only)</label>
                                        </div>
                                        <div className="adpt-form-input no-bg">
                                            <input type="checkbox" aria-label="I'm interested in a field trip to a Gladney presentation" name="adptfieldtrip" value="1"/>
                                            <label aria-hidden="true" className="checkbox" htmlFor="adptfieldtrip">I'm interested in a field trip to a Gladney presentation</label>
                                        </div>
                                    </section>
                                </fieldset>
                                <fieldset>
                                    <section className="form-message">
                                        <div className="adpt-form-input">
                                            <textarea name="comments" rows="7"></textarea>
                                            <label aria-hidden="true" className="floating" htmlFor="comments">Comments</label>
                                        </div>
                                    </section>
                                </fieldset>
                                <footer className="adpt-form-footer">
                                    <button className="contact-form-submit skinny" type="submit">Submit</button>
                                </footer>
                            </form>
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
    )
}

export default Contact