import { useRouter } from 'next/router'
import NavMenu from '../../components/portal/Menu'
import SVG from '../../components/svg'

import '../../sass/portal.sass'

export default () => {
	
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
            <main></main>
		</adpt-portal>
    )
}