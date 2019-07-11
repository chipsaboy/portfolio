import React from 'react'
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout'
import About from '../components/about'

const AboutPage = () => {
    return (
        <Layout>
            <Fade>
                <About />
            </Fade>
        </Layout>
    )
}

export default AboutPage