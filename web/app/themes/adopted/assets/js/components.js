class AdptStage extends HTMLElement {
	get disabled() {
		return this.hasAttribute('disabled') ? 'it worked ya dingus' : 'it worked ya dingus'
	}

	set disabled(val) {
		val ? this.setAttribute('disabled','') : this.removeAttribute('disabled')
	}

	connectedCallback() {
		this.disabled = true
		this.style.display = 'block'
		this.style.paddingTop = '3em'
	}

	constructor() {
		super()
	}
}

customElements.define('adpt-stage', AdptStage)
