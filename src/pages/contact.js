import React from 'react'
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout'
import Contact from '../components/contact'

const ContactPage = () => {
    return (
        <Layout>
            <Fade>
                <Contact />
            </Fade>
        </Layout>
    )
}

export default ContactPage