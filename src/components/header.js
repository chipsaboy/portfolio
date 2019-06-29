import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Nathan Campbell</h1>
            <Link to="/about">about</Link>
            <Link to="/blog">blog</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
        </header>
    )
}

export default Header