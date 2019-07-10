import React from 'react'
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout'

const BlogPage = () => {
    return (
        <Layout>
            <Fade bottom>
                <div>
                    <h1>Blog</h1>
                    <p>Blog Posts</p>
                </div>
            </Fade>
        </Layout>
    )
}

export default BlogPage