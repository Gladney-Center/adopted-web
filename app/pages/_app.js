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
                    <title>{process.env.BASE_TITLE}</title>
                    <link rel="stylesheet" href="https://use.typekit.net/zhc3hzf.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
                    <link rel="manifest" href="../static/site.webmanifest"/>
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