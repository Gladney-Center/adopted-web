import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageContext from '../components/context'
import SVG from '../components/svg'

const Students = props => {
    const { meta, content } = useContext(PageContext)['students']

    document.getElementById('__next').className = 'adpt-students'

    return (
        <main className="adpt-students">
            <Head>
                <title>{meta.title}</title>
            </Head>
            <adpt-stage>
                <SVG.HeartBG/>
                <adpt-inner>
                    <h1>{content.stage.headline}</h1>
                </adpt-inner>
            </adpt-stage>
            <section class="adpt-fold">
                <adpt-inner>
                    <div class="adpt-fold-graybox">
                        <p>When you or one of your friends find themselves pregnant (and they sure didn’t mean to be!), we believe that adoption can be a healthy choice because it’s a decision made in the best interest of the child. Because of age, school, and living with parents, you won’t always have what’s needed to provide the things you want to and need to for your child. Especially, if there’s relationship drama thrown into the situation.</p>
                        <p>We also believe adoption is a good choice for adults who want to be parents but just can’t get pregnant. Adoption can be a great solution for both the expectant parents and the couples who can’t get pregnant.</p>
                        <p>Learn more about the journey of adoption through Angie and Jose’s story</p>
                    </div>
                </adpt-inner>
            </section>
        </main>
    )
}

export default Students