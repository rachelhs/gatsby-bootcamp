import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost (slug: {eq: $slug}) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {

    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.title
          const url = node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url}/>
        }
      }
    }
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Blog