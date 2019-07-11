import React from "react"
import TextLoop from "react-text-loop"
import Layout from '../components/layout'
import indexStyles from '../styles/index.module.scss'

class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className={indexStyles.componentPage}>
                    <div className={indexStyles.start}>
                        <h1>Check back soon!</h1>
                        <h2>
                            <TextLoop className={indexStyles.sims}>
                                <span>Searching for Llamas</span>
                                <span>Extracting Resources</span>
                                <span>Sequencing Particles</span>
                                <span>Relaxing Splines</span>
                                <span>Synthesizing Wavelets</span>
                                <span>Building Data Trees</span>
                                <span>Reticulating Splines</span>
                                <span>Applying Feng Shui</span>
                            </TextLoop>
                        </h2>
                    </div>
                </div>
            </Layout>
        )
    }
    
}

export default IndexPage