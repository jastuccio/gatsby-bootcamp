import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const PostList = styled.ol`
  list-style-type: none;
  margin: 0;
  color: blue;
`

const StyledH2 = styled.h2`
  color: yellow;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: aqua;
`

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
