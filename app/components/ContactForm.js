import { Component } from 'react'
import HubspotForm from 'react-hubspot-form'
import axios from 'axios'

export default class ContactForm extends Component {
    state = {
        error: false,
        submitted: false
    }

    sendForm = async (e) => {
        e.preventDefault()

        let form = new FormData(e.target),
            obj = {
                submittedAt: ""+Date.now()+"",
                fields: [],
                context: {
                    pageUri: window.location.href,
                    pageName: document.title
                }
            }

        for (let pair of form.entries()) {
            obj.fields.push({
                name: pair[0],
                value: pair[1]
            })
        }
        
        await axios('https://api.hsforms.com/submissions/v3/integration/submit/4985317/44af6bfa-e1ac-4cef-ad46-0d0994a88c72',obj,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': obj.length
            }
        }).then(res => res.json())
        .then(resp => {
            let { data } = resp
            if (typeof data.status !== 'undefined' && data.status === 'error') return this.setState({
                error: true
            })
            
            if (data.inlineMessage) return this.setState({
                submitted: true
            })
        })
        .catch(e => console.log(e))
    }

    render() {
        let { data } = this.props

        return (
            <>
            {/* <adpt-contact-form>
                <header className="adpt-form-header">
                    <h1>{data.heading}</h1>
                    <main className="top-text">{data.text}</main>
                </header>
                <HubspotForm
                    portalId="4985317" 
                    formId="44af6bfa-e1ac-4cef-ad46-0d0994a88c72" 
                    cssClass="doodieMcDoodie"
                    onReady={(form) => console.log(form)}
                />
            </adpt-contact-form> */}
            <form action="/" role="form" onSubmit={this.sendForm}>
                <header className="adpt-form-header">
                    <h1>{data.heading}</h1>
                    <main className="top-text">{data.text}</main>
                </header>
                <section className="formInnerWrap">
                    {this.state.submitted ? <div className="formCover"><span>Thank you for your message! A member of our team will get back to you shortly!</span></div> : null}
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
                                <input type="radio" name="which_adopted_program_are_you_interested_in_" aria-label="I'm interested in AdoptED To-Go" id='adpt2go' value="adpt2go" defaultChecked/>
                                <label aria-hidden="true" className="checkbox" htmlFor="adpt2go">I'm interested in AdoptED To-Go</label>
                            </div>
                            <div className="adpt-form-input no-bg">
                                <input type="radio" name="which_adopted_program_are_you_interested_in_" aria-label="I'm interested in a classroom presentation (DFW only)" id="adptclassroom" value="adptclassroom"/>
                                <label aria-hidden="true" className="checkbox" htmlFor="adptclassroom">I'm interested in a classroom presentation (DFW only)</label>
                            </div>
                            <div className="adpt-form-input no-bg">
                                <input type="radio" name="which_adopted_program_are_you_interested_in_" aria-label="I'm interested in a field trip to a Gladney presentation" id="adptfieldtrip" value="adptfieldtrip"/>
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
                </section>
                <footer className="adpt-form-footer">
                    <button className="contact-form-submit skinny" type="submit" disabled={this.state.submitted}>Submit</button>
                </footer>
                {this.state.error ? <div>
                    <span class="formErrors">There was an error. Please try again later.</span>
                </div> : null}
            </form>
            </>
        )
    }
}