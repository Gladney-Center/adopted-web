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
		const text = this.innerHTML
		return this.outerHTML = `
			<div>
			<span class="top-text">${text}</span><br>
			<button type="submit">Submit</button>
			</div>
		`
	}

	connectedCallback() {
		this.addEventListener('submit',(e) => e.preventDefault() || console.log(e))
		console.log(this)
	}

	constructor() {
		super()
		this.setAttribute('role','form')
		this.setAttribute('action','/')
		this.attachShadow({mode: 'open'})
		this.shadowRoot.innerHTML = '<div>Test</div>'
	}
}

customElements.define('adpt-stage', AdptStage)
customElements.define('adpt-contact-form', AdptContactForm, {extends: 'form'})
