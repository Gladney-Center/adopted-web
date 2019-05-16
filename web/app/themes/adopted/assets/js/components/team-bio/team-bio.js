customElements.define('adpt-team-bio',
    class extends HTMLElement {
        connectedCallback() {}

        preTemplate() {
            let template = document.createElement('template')
                template.innerHTML =`
                    <style type="text/css">@import url('/app/themes/adopted/assets/js/components/team-bio/team-bio.sass')</style>
                `
            return template
        }

        constructor() {
            super()
            
            this.setAttribute('role','complementary')

            const template = document.getElementById('bio-innards').content
            this.appendChild(template.cloneNode(true))
        }
    }
)
