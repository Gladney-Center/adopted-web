customElements.define('adpt-qblock',
    class extends HTMLElement {
        connectedCallback() {
           
        }

        constructor() {
            super()

            console.log(qbubbleright,qbubbleleft)

            const template = document.createElement('adpt-qbubble-overlay',{is: 'div'})
            template.classList.add('adpt-qbubble-overlay')
            
            let i = 0,
            a = 'a'

            while(i++ < 10) {
                let div = document.createElement('div'),
                    obj = document.createElement('object'),
                    src = (i % 2 == 0) ? '/assets/svg/qbubbleleft.svg' : '/assets/svg/qbubbleright.svg'

                div.classList.add('qbubble-container','qb-a'+a)

                obj.setAttribute('data',src)
                obj.setAttribute('type','image/svg+xml')
                obj.innerText = 'Your browser doesn\'t support SVG'
                
                div.innerHTML = object

                template.appendChild(div)
                a = String.fromCharCode(a.charCodeAt() + 1)
            }

            this.appendChild(template.cloneNode(true))
        }
    }
)