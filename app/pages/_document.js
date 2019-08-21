import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AdoptED extends Document {

    componentDidMount() {
        const qBubble = document.querySelector('#qbubblecontainer')

        const funcs = {
            isInViewport: (elem) => elem.getBoundingClientRect().top < 800
        }

        if (qBubble) window.addEventListener(
            'scroll',
            (e) => funcs.isInViewport(qBubble) && qBubble.classList.add('active')
        )
    }

    render() {
        return (
            <Html>
                <Head/>
                <body className="adpt-mounted">
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}