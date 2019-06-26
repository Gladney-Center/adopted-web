import {Fragment} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SVG from './svg'

export default () => (
    <Fragment>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <link rel="stylesheet" href="https://use.typekit.net/zhc3hzf.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <header role="banner" className="adpt-header">
            <div className="adpt-mobile-menu">
                <div className="adpt-mobile-menu-icon">
                    <div className="adpt-mobile-menu-icon-lines"></div>
                </div>
            </div>
            <div className="adpt-nav-logo">
                <Link href="/">
                    <a><SVG.AdptLogo/></a>
                </Link>
            </div>
            <div className="adpt-nav-dt">
                <nav role="navigation" className="adpt-menu">
                    <div className="menu-header-nav-container">
                        <ul id="menu-header-nav" className="menu">
                            <li className="about menu-item">
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className="educators menu-item">
                                <Link href="/educators">
                                    <a>Educators</a>
                                </Link>
                            </li>
                            <li className="students menu-item">
                                <Link href="/students">
                                    <a>Students</a>
                                </Link>
                            </li>
                            <li className="askapro menu-item">
                                <Link href="/ask-a-pro">
                                    <a>Ask A Pro</a>
                                </Link>
                            </li>
                            <li className="contact menu-item">
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="adpt-header-apps">
                <span>Get the app!</span>
                <div className="adpt-app-link">
                    <a href="#">
                        <i className="fab fa-apple"></i>
                    </a>
                </div>
                <div className="adpt-app-link">
                    <a href="#">
                        <i className="fab fa-android"></i>
                    </a>
                </div>
                <div className="adpt-app-link">
                    <a href="#">
                        <i className="fab fa-windows"></i>
                    </a>
                </div>
            </div>
        </header>
    </Fragment>
)