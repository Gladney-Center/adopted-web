import { useContext } from 'react'
import Link from 'next/link'
import SVG from './svg'
import PageContext from './context'

export default (props) => {
    const { header } = useContext(PageContext).common

    return (
        <header role="banner" className="adpt-header">
            <div className="adpt-mobile-menu">
                <div className="adpt-mobile-menu-icon" onClick={(e) => {
                    e.preventDefault()
                    document.documentElement.classList.toggle('menu-open')
                    document.body.classList.toggle('menu-open')
                }}>
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
                        <a href={app.link}><i className={["fab",app.icon].join(' ')}></i></a>
                    </div>
                ))}
            </div>
        </header>
    )
}