import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AdoptED extends Document {

    render() {
        return (
            <Html>
                <Head/>
                <body className="adpt-mounted">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}