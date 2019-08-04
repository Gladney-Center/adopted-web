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
            <section className="adpt-fold">
                <adpt-inner>
                    <div className="adpt-fold-graybox">
                        <p>When you or one of your friends find themselves pregnant (and they sure didn’t mean to be!), we believe that adoption can be a healthy choice because it’s a decision made in the best interest of the child. Because of age, school, and living with parents, you won’t always have what’s needed to provide the things you want to and need to for your child. Especially, if there’s relationship drama thrown into the situation.</p>
                        <p>We also believe adoption is a good choice for adults who want to be parents but just can’t get pregnant. Adoption can be a great solution for both the expectant parents and the couples who can’t get pregnant.</p>
                        <p>Learn more about the journey of adoption through Angie and Jose’s story</p>
                    </div>
                </adpt-inner>
            </section>
            <section>
                <script src="https://fast.wistia.com/embed/medias/qx6z98rzv6.jsonp" async></script>
                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0',position: 'relative'}}>
                    <div className="wistia_responsive_wrapper" style={{height:'100%', left:0, position: 'absolute', top:0, width:'100%'}}>
                        <div className="wistia_embed wistia_async_qx6z98rzv6 videoFoam=true" style={{height: '100%', position: 'relative', width: '100%'}}>
                            <div className="wistia_swatch" style={{height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width:'100%'}}>
                                <img src="https://fast.wistia.com/embed/medias/qx6z98rzv6/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}} alt="" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Students