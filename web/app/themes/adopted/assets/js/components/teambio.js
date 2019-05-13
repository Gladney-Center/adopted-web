customElements.define('adpt-team-bio',
    class extends HTMLElement {
        connectedCallback() {}

        preTemplate() {
            let template = document.createElement('template')
                template.innerHTML =`
                    <style type="text/css"></style>
                `
            return template
        }

        constructor() {
            super()
            
            this.setAttribute('role','complementary')

            const template = document.getElementById('bio-innards').content
            const shadow = this.attachShadow({mode:'open'})
                .appendChild(template.cloneNode(true))
        }
    }
)
