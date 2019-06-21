import {Fragment} from 'react'
import Header from './header'
import Footer from './footer'

const Page = props => (
    <Fragment>
        <Header/>
        {props.children}
        <Footer/>
    </Fragment>
)

export default Page