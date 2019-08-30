import { useRouter } from 'next/router'
import NavMenu from './Menu'
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
            </header>
            {children}
		</adpt-portal>
    )
}