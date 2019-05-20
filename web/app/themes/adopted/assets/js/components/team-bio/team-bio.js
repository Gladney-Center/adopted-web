customElements.define('adpt-team-bio',
    class extends HTMLElement {
        connectedCallback() {
            this.setAttribute('role','complementary')

            let figs = this.querySelectorAll('figure')
            for (var i = 0; i < figs.length; i++) {
                figs[i].classList.remove('active')
                figs[i].addEventListener('click',(e) => {
                    e.preventDefault()
                    e.target.classList.add('active')
                })
            }
        }

        constructor() {
            super()

            const parallaxContent = document.createElement('adpt-team-bio-content',{is: 'div'})
            parallaxContent.innerHTML = this.innerHTML
            this.innerHTML = ''
            this.appendChild(parallaxContent)

            const parallaxBg = document.createElement('adpt-parallax-bg',{is: 'div'})
            parallaxBg.setAttribute('class','adpt-parallax')
            this.insertBefore(parallaxBg.cloneNode(true),this.firstChild)
        }
    }
)