import React from 'react'
import AdptLogo from './components/AdptLogo'
import AdptNavMenu from './components/AdptNavMenu'

const toggleMenu = () => document.body.classList.toggle('menu-open')

const toggleTheme = (theme) => document.documentElement.className = theme+'-theme' || ''

const Adpt = () => <React.Fragment>
    <menu onClick={toggleMenu}>
        <AdptNavMenu toggleTheme={toggleTheme}/>
    </menu>
    <header>
        <div className="adpt-mobile-menu" onClick={toggleMenu}>
            <div className="adpt-mobile-menu-icon">
                <div className="adpt-mobile-menu-icon-lines"></div>
            </div>
        </div>
        <AdptLogo />
    </header>
    <main></main>
</React.Fragment>

export default Adpt