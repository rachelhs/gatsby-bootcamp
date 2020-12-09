import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Some text here</p>
            <p>Some more information here</p>
            <p>Go to <Link to="/contact">contact page</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage