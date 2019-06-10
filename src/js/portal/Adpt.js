import React from 'react'
import AdptLogo from './components/AdptLogo'
import AdptNavMenu from './components/AdptNavMenu'

const settings = JSON.parse(localStorage.getItem('portalSettings') || '{"theme": "sunrise"}')

const toggleMenu = () => document.body.classList.toggle('menu-open')

const toggleTheme = (color) => {
    let theme = color || settings.theme
    document.documentElement.className = theme ? theme+'-theme' : ''
    localStorage.setItem('portalSettings', JSON.stringify(Object.assign(settings,{theme: theme})))
}

const Adpt = () => {
    toggleTheme()
    return (
        <React.Fragment>
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
    )
}

export default Adpt