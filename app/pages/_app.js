import React from 'react'
import App, { Container } from 'next/app'
import fbapp from '../utilities/firebase'
import Head from 'next/head'
import PageContext from '../components/context'
import Header from '../components/header'
import Footer from '../components/footer'

import '../sass/adopted.sass'

export default class AdptApp extends App {
    state = {
        init: false
    }

    componentDidMount() {
        this.itemsRef = fbapp.firestore().collection('/pages').onSnapshot((snapshot) => {
            let obj = {}

            snapshot.forEach((sn) => {
                obj[sn.id] = sn.data()
            })

            this.setState({
                init: true,
                ...obj
            })
        })
    }

    componentWillUnmount() {
        this.itemsRef()
    }

    render() {
        if (!this.state.init) return null

        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                    <meta name="robots" content="index,follow"/>
                    <title>{process.env.BASE_TITLE}</title>
                    <link rel="stylesheet" href="https://use.typekit.net/zhc3hzf.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
                    <link rel="icon" href="../static/favicon.ico"/>
                    <link rel="manifest" href="../static/site.webmanifest"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-22691212-2"></script>
                    <script>{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-22691212-2');`}
                    </script>
                    <script>{`
                        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '962794667148171');fbq('track', 'PageView');`}
                    </script>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4985317.js"></script>
                    <script type="text/javascript" async src="https://fast.wistia.com/assets/external/E-v1.js"></script>
                    <noscript>
                        <img height="1" width="1" src="https://www.facebook.com/tr?id=962794667148171&ev=PageView&noscript=1"/>
                    </noscript>
                </Head>
                <PageContext.Provider value={this.state}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </PageContext.Provider>
            </Container>
        )
    }
}