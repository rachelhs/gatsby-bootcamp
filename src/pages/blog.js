import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
            edges {
                node {
                    title
                    slug
		            publishedDate(formatString: "Do MMMM YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edgeObject) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edgeObject.node.slug}`}><h2>{edgeObject.node.title}</h2>
                                    <p>{edgeObject.node.publishedDate}</p></Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage