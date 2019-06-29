import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hi.</h1>
            <h2>I'm Nathan.</h2>
            <p><Link to="/contact">Contact</Link></p>
        </Layout>
    )
}

export default IndexPage