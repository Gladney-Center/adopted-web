customElements.define('adpt-team-bio',
    class extends HTMLElement {
        connectedCallback() {
            this.setAttribute('role','complementary')

            document.addEventListener('click',(e) => {
                e.preventDefault()

                if (e.target.matches('.bio-image')) {
                    let figs = this.querySelectorAll('figure')
                    for (var i = 0; i < figs.length; i++) {
                        figs[i].classList.remove('active')
                    }
                    let parnt = e.target.parentNode
                    parnt.parentNode.classList.add('actif')
                    parnt.classList.add('active')
                }
            })
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

            let figs = this.querySelectorAll('figure>img')
            for (var i = 0; i < figs.length; i++) {
                figs[i].classList.add('bio-image')
            }
        }
    }
)