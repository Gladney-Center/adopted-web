import {qbubbleleft,qbubbleright} from '../imports/qbubbles'

customElements.define('adpt-qblock',
    class extends HTMLElement {
        connectedCallback() {
            const template = document.createElement('adpt-qbubble-overlay',{is: 'div'}),
                heading = document.createElement('adpt-qblock-content',{is: 'div'}),
                spacer = document.createElement('adpt-qblock-content',{is: 'div'}),
                blurb = document.createElement('adpt-qblock-content',{is: 'div'}),
                inner = document.createElement('adpt-inner',{is: 'div'})

            this.innerText = ''
            this.removeAttribute('headline')
            this.removeAttribute('text')
            this.removeAttribute('link')

            // QBubble factory
            let i = 0, a = 'a'

            while(i++ < 10) {
                let div = document.createElement('div'),
                    src = (i % 2 == 0) ? qbubbleleft : qbubbleright

                div.classList.add('qbubble-container','qb-a'+a)
                
                div.innerHTML = src

                template.appendChild(div)
                a = String.fromCharCode(a.charCodeAt() + 1)
            }

            template.classList.add('adpt-qbubble-overlay')
            inner.appendChild(template)

            // Heading factory
            heading.classList.add('heading')
            heading.innerHTML = '<h2>'+this.headline+'</h2>'
            inner.appendChild(heading)
             
            // Spacer factory
            spacer.classList.add('spacer')
            inner.appendChild(spacer)
 
            // Blurb factory
            const blurbInner = document.createElement('adpt-qblock-content-inner',{is: 'div'})
 
            blurbInner.innerHTML = `
                <h5>Ask A Pro</h5>
                <aside>${this.blurb}</aside>
                <a class="btn" href="${this.link}">Learn More</a>
            `
 
            blurb.classList.add('blurb')
            blurb.appendChild(blurbInner)
            inner.appendChild(blurb)

            this.appendChild(inner)
        }

        constructor() {
            super()

            this.headline = this.hasAttribute('headline') ? this.getAttribute('headline') : 'Headline'
            this.blurb = this.hasAttribute('text') ? this.getAttribute('text') : this.innerText
            this.link = this.hasAttribute('link') ? this.getAttribute('link') : '#'
        }
    }
)