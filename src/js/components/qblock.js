import qbubbleleft from '../../svg/qbubbleleft.svg'
import qbubbleright from '../../svg/qbubbleright.svg'

customElements.define('adpt-qblock',
    class extends HTMLElement {
        connectedCallback() {
           
        }

        constructor() {
            super()

            const template = document.createElement('adpt-qbubble-overlay',{is: 'div'})
            template.classList.add('adpt-qbubble-overlay')
            
            let i = 0,
            a = 'a'

            while(i++ < 10) {
                let div = document.createElement('div')
                div.classList.add('qbubble-container','qb-a'+a)
                div.innerText = (i % 2 == 0) ? qbubbleleft : qbubbleright
                template.appendChild(div)
                a = String.fromCharCode(a.charCodeAt() + 1)
            }

            console.log(template)
            this.appendChild(template.cloneNode(true))
        }
    }
)