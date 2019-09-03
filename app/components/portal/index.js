import { useRouter } from 'next/router'
import Head from 'next/head'
import NavMenu from './Menu'
import PortalActions from './Actions'
import SVG from '../svg'

import '../../sass/portal.sass'

export default ({children}) => {
	
	const router = useRouter(),
		settings = JSON.parse(window.localStorage.getItem('portalSettings') || '{"theme": "sunrise"}'),
		toggleMenu = () => document.body.classList.toggle('menu-open'),
		toggleTheme = (color) => {
			let theme = color || settings.theme
			document.documentElement.className = theme ? theme+'-theme' : ''
			window.localStorage.setItem('portalSettings', JSON.stringify(Object.assign(settings,{theme: theme})))
		}

		toggleTheme()

    return (
        <adpt-portal>
            <Head>
                <title>{'AdoptED Online Learning Portal' || process.env.BASE_TITLE}</title>
            </Head>
            <menu onClick={toggleMenu}>
                <NavMenu toggleTheme={toggleTheme}/>
            </menu>
            <header>
                <div className="adpt-mobile-menu" onClick={toggleMenu}>
                    <div className="adpt-mobile-menu-icon">
                        <div className="adpt-mobile-menu-icon-lines"></div>
                    </div>
                </div>
				<adpt-logo>
					<SVG.AdptLogo/>
				</adpt-logo>
                <PortalActions/>
            </header>
            {children}
		</adpt-portal>
    )
}