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
				<span class="top-text">
					<slot name="top-text">${this.text}</slot>
				</span><br>
				<button type="submit">Submit</button>
			`
			return template
	}

	connectedCallback() {
		this.addEventListener('submit',(e) => e.preventDefault() || console.log(e))
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
