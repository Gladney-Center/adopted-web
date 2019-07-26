import { Component } from 'react'
import Head from 'next/head'

const Error = () => (
    <>
        <Head>
            <title>Error. Not Found.</title>
        </Head>
        <div className="adpt-error">
            <div>
                <h1>404</h1>
                <h2>Error. The page could not be found.</h2>
            </div>
        </div>
    </>
)

export default Error