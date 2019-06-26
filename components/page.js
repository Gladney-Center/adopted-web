import {Fragment} from 'react'
import Header from './header'
import Footer from './footer'

import '../sass/adopted.sass'

const Page = props => (
    <main className={props.className}>
        <Header/>
        {props.children}
        <Footer/>
    </main>
)

export default Page