import React from 'react'
import App, { Container } from 'next/app'
import fbapp from '../utilities/firebase'
import PageContext from '../components/context'
import Header from '../components/header'
import Footer from '../components/footer'

import '../sass/adopted.sass'

export default class AdptApp extends App {
    state = {
        init: false
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
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
                <PageContext.Provider value={this.state}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </PageContext.Provider>
            </Container>
        )
    }
}