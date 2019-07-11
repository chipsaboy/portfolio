import React from 'react'
import headerStyles from '../styles/header.module.scss'
import LogoSVG from './logoSVG.js'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <LogoSVG className={headerStyles.logo} />
        </header>
    )
}

export default Header

