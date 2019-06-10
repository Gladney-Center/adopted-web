customElements.define('adpt-qblock',
    class extends HTMLElement {
        connectedCallback() {
           
        }

        constructor() {
            super()

            const template = document.createElement('template')
            template.classList.add('adpt-podcast-qbubble-overlay')
            
            let i = 0,
            a = 'a'

            while(i++ < 10) {
                let div = document.createElement('div')
                div.classList.add('qbubble-container qb-a'+a)
                div.innerHTML = (i % 2 == 0) ? '<adpt-icon:qbubbleleft>' : '<adpt-icon:qbubbleright>'
                template.appendChild(div)
                a = String.fromCharCode(a.charCodeAt() + 1)
            }

            console.log(template)
            this.appendChild(template.content.cloneNode(true))
        }
    }
)