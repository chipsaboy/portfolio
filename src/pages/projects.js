import React from 'react'
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout'
import Projects from '../components/projects'

const ProjectsPage = () => {
    return (
        <Layout>
            <Fade>
                <Projects />
            </Fade>
        </Layout>
    )
}

export default ProjectsPage