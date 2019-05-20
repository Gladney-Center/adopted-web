customElements.define('adpt-team-bio',
    class extends HTMLElement {
        connectedCallback() {
            this.setAttribute('role','complementary')
        }

        constructor() {
            super()

            const parallaxContent = document.createElement('adpt-team-bio-content',{is: 'div'})
            parallaxContent.innerHTML = this.innerHTML
            this.innerHTML = ''
            this.appendChild(parallaxContent)

            const parallaxBg = document.createElement('adpt-parallax-bg',{is: 'div'})
            parallaxBg.setAttribute('class','adpt-parallax')
            parallaxBg.appendChild(document.createTextNode('Parallax'))
            this.insertBefore(parallaxBg.cloneNode(true),this.firstChild)
        }
    }
)