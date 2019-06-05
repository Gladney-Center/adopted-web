import React from 'react'
import AdptLogo from './components/AdptLogo'

const Adpt = () =>
    <React.Fragment>
        <header>
            <div className="adpt-mobile-menu">
                <div className="adpt-mobile-menu-icon">
                    <div className="adpt-mobile-menu-icon-lines"></div>
                </div>
            </div>
            <AdptLogo />
            <div className="header-right">Hello World!</div>
        </header>
        <main></main>
    </React.Fragment>

export default Adpt