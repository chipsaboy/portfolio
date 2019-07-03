import React from 'react'
import { ReactComponent as GitHub } from '../assets/GitHub.svg'
import { graphql, useStaticQuery } from 'gatsby'
import linkedin from '../assets/LI-In-Bug.png'
import footerStyles from './modules/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <a href="https://github.com/chipsaboy" className={footerStyles.logos}><GitHub width="30px" /></a>
            <a href="https://www.linkedin.com/in/nathncampbell/" className={footerStyles.logos}><img src={linkedin} height="30px" alt="LinkedIn"/></a>
            <p className={footerStyles.footerText}>© 2019 {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer