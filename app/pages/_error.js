import Head from 'next/head'
import SVG from '../components/svg'

const Error = () => (
    <>
        <Head>
            <title>Error. Not Found.</title>
        </Head>
        <div className="adpt-error">
            <div>
                <h1>Error.</h1>
                <h2>Sorry, something went wrong.</h2>
            </div>
            <div>
                <div>
                    <span>If you're using Internet Explorer, try one of these other supported web browsers:</span>
                    <icon-grid>
                        <a title="Google Chrome" href="https://www.google.com/chrome/">
                            <i className="fab fa-chrome"></i>
                        </a>
                        <a title="Mozilla Firefox" href="https://www.mozilla.org/en-US/firefox/">
                            <i className="fab fa-firefox"></i>
                        </a>
                        <a title="Microsoft Edge" href="https://www.microsoft.com/en-us/windows/microsoft-edge">
                            <i className="fab fa-edge"></i>
                        </a>
                        <a title="Apple Safari" href="https://www.apple.com/safari/">
                            <i className="fab fa-safari"></i>
                        </a>
                    </icon-grid>
                </div>
                <SVG.GabbyVanna/>
            </div>
        </div>
    </>
)

export default Error