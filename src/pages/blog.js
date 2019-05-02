import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

// import { node } from 'prop-types'
import styled from 'styled-components'
import Layout from '../components/layout'

const PostList = styled.ol`
  margin: 0;
  color: blue;
`

const StyledH2 = styled.h2`
  color: yellow;
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
      <PostList>
        {data.allMarkdownRemark.edges.map(edge => (
          <>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <PostItem>
                <StyledH2>{edge.node.frontmatter.title}</StyledH2>
              </PostItem>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </>
        ))}
      </PostList>
    </Layout>
  )
}

export default BlogPage
