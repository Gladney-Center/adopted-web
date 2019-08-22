import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AdoptED extends Document {

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