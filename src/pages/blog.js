import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <Link to={`/blog/${edge.node.fields.slug}`}>
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
            </li>
            <p>{edge.node.frontmatter.date}</p>
          </Link>
        ))}
      </ol>
    </Layout>
  )
}
export default BlogPage
