import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import { ReactComponent as Logo } from '../assets/logo-filled.svg'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <Link><Logo className={headerStyles.logo} width="130"/></Link>
            <ul className={headerStyles.navList}>
                <li>
                    <Link 
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/about">
                            about
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/blog">
                            blog
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/projects">
                            projects
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/contact">
                            contact
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

