class AdptStage extends HTMLElement {
	connectedCallback() {}

	constructor() {
		super()
	}
}

class AdptContactForm extends HTMLFormElement {
	get disabled() {
		return this.hasAttribute('disabled') ? 'it worked ya dingus' : 'it worked ya dingus'
	}

	set disabled(val) {
		val ? this.setAttribute('disabled','') : this.removeAttribute('disabled')
	}

	buildForm() {
		let template = document.createElement('template')
			template.innerHTML =`
				<header class="adpt-form-header">
					<h1>Contact</h1>
					<main class="top-text">${this.text}</main>
				</header>
				<fieldset>
					<section class="form-fields">
						<div class="adpt-form-input">
							<input type="text" required validation="email|tel" tabindex="3" name="firstname" aria-label="First Name"/>
							<label aria-hidden="true" class="floating" for="firstname">First Name</label>
						</div>
						<div class="adpt-form-input">
							<input type="text" required validation="email|tel" tabindex="4" name="lastname" aria-label="Last Name"/>
							<label aria-hidden="true" class="floating" for="lastname">Last Name</label>
						</div>
						<div class="adpt-form-input">
							<input type="email" required validation="email|tel" tabindex="5" name="email" aria-label="Email Address"/>
							<label aria-hidden="true" class="floating" for="email">Email Address</label>
						</div>
						<div class="adpt-form-input">
							<input type="tel" required validation="tel" tabindex="6" name="phone" aria-label="Phone Number"/>
							<label aria-hidden="true" class="floating" for="phone">Phone Number</label>
						</div>
					</section>
				</fieldset>
				<fieldset>
					<section class="form-options">
						<div class="adpt-form-input no-bg">
							<input type="checkbox" tabindex="7" aria-label="I'm interested in AdoptED To-Go" name='adpt2go' value="1"/>
							<label aria-hidden="true" class="checkbox" for="adpt2go">I'm interested in AdoptED To-Go</label>
						</div>
						<div class="adpt-form-input no-bg">
							<input type="checkbox" tabindex="8" aria-label="I'm interested in a classroom presentation (DFW only)" name="adptclass" value="1"/>
							<label aria-hidden="true" class="checkbox" for="adptclass">I'm interested in a classroom presentation (DFW only)</label>
						</div>
						<div class="adpt-form-input no-bg">
							<input type="checkbox" tabindex="9" aria-label="I'm interested in a field trip to a Gladney presentation" name="adptfieldtrip" value="1"/>
							<label aria-hidden="true" class="checkbox" for="adptfieldtrip">I'm interested in a field trip to a Gladney presentation</label>
						</div>
					</section>
				</fieldset>
				<fieldset>
					<section class="form-message">
						<div class="adpt-form-input">
							<textarea name="comments" tabindex="10" rows="7"></textarea>
							<label aria-hidden="true" class="floating" for="comments">Comments</label>
						</div>
					</section>
				</fieldset>
				<footer class="adpt-form-footer">
					<button class="contact-form-submit skinny" tabindex="9" type="submit">Submit</button>
				</footer>
			`
			return template
	}

	connectedCallback() {
		this.addEventListener('submit',(e) => {
			e.preventDefault() 
			let form = new FormData(e.target),
				obj = {}
			for (let pair of form.entries()) {
				obj[pair[0]] = pair[1]
			}
			console.log(obj)
		})
	}

	constructor() {
		super()

		this.text = this.getAttribute('text') || 'Default Text'
		this.setAttribute('role','form')
		this.setAttribute('action','/')

		let form = this.appendChild(this.buildForm().content)
	}
}

customElements.define('adpt-stage', AdptStage)
customElements.define('adpt-contact-form', AdptContactForm, {extends: 'form'})
