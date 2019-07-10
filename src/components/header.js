import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'
import LogoSVG from './logoSVG.js'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <Link className={headerStyles.logo}><LogoSVG /></Link>
            <ul className={headerStyles.navList}>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/blog">
                            blog
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

