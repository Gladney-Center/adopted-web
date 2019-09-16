import { Component } from 'react'
import Head from 'next/head'

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
        </div>
    </>
)

export default Error