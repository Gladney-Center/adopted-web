import {Fragment} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/page'
import {GabbyAnim} from '../components/svg'

//console.log(process.env.NODE_ENV)

export default () => (
    <Page>
        <Head>
            <title>AdoptED - Adoption Education</title>
        </Head>
        <adpt-stage class="adpt-stage">
            <div class="adpt-stage-inner">
                <div class="adpt-stage-column">
                    <h1>Did you know that only 1% of women faced with an unplanned pregnancy choose adoption?</h1>
                </div>
                <div class="adpt-stage-column">
                    <figure class="adpt-block-anim">
                        <GabbyAnim/>
                    </figure>
                </div>
            </div>
        </adpt-stage>
        <section class="adpt-fold">
            <adpt-inner>
                <div class="adpt-fold-graybox">
                    <p>Through free in-classroom and online resources, AdoptED educates students on misconceptions of adoption. Our programs take students through adoption processes and challenge them to think critically about the life decisions they could face. Our goal is to empower students to make educated decisions based on factual information.</p>
                    <a class="btn" href="#">Learn More</a>
                </div>
            </adpt-inner>
        </section>
    </Page>
)