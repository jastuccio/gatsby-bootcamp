import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/layout'

const PostList = styled.ol`
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
      <PostList>
        {data.allMarkdownRemark.edges.map(edge => (
          <>
            <StyledLink to={`/blog/${edge.node.fields.slug}`}>
              <li>
                <StyledH2>{edge.node.frontmatter.title}</StyledH2>
              </li>
              <p>{edge.node.frontmatter.date}</p>
            </StyledLink>
          </>
        ))}
      </PostList>
    </Layout>
  )
}

export default BlogPage
