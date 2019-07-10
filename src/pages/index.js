import React from "react"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import Layout from '../components/layout'
import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'
import indexStyles from '../styles/index.module.scss'

class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Fade>
                    <div className={indexStyles.componentPage}>
                        <div className={indexStyles.start}>
                            <h1>Hi, I'm Nathan.</h1>
                        </div>
                    </div>
                    <div className={indexStyles.componentPage}>
                        <About className={indexStyles.about}/>
                    </div>
                    <div className={indexStyles.componentPage}>
                        <Projects/>
                    </div>
                    <div className={indexStyles.componentPage}>
                        <Contact/>
                    </div>
                </Fade>
            </Layout>
        )
    }
    
}

export default IndexPage