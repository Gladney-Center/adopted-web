import { Fragment, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SVG from './svg'
import PageContext from './context'

export default (props) => {
    const { header } = useContext(PageContext).common

    return (
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
                                {header.nav.map((nv,i) => (
                                    <li key={i} className={["menu-item",nv.class].join(' ')}>
                                        <Link href={nv.link}>
                                            <a>{nv.label}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="adpt-header-apps">
                    <span>{header.app.text}</span>
                    {header.app.apps.map((app,i) => (
                        <div key={i} className="adpt-app-link">
                            <Link href={app.link}>
                                <a><i className={["fab",app.icon].join(' ')}></i></a>
                            </Link>
                        </div>
                    ))}
                </div>
            </header>
        </Fragment>
    )
}