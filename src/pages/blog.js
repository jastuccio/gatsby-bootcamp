import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import styled from 'styled-components'
import { black, gray200, gray300, gray700 } from '../utilities'

import Layout from '../components/layout'

// .posts <ol>
const PostList = styled.ol`
  list-style-type: none;
  margin: 0;
`

// .post <li>
const PostItem = styled.li``

// .post a
const BlogPostLink = styled(props => <Link {...props} />)`
  margin: 1rem 0;
  background: ${gray200};
  color: ${black};
  display: block;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    background: ${gray300};
  }
`

const H2 = styled.h2`
  margin-bottom: 0;
`

const P = styled.p`
  color: ${gray700};
  font-size: 0.8rem;
  font-style: italic;
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
          <BlogPostLink to={`/blog/${edge.node.fields.slug}`}>
            <PostItem>
              <H2>{edge.node.frontmatter.title}</H2>
              <P>{edge.node.frontmatter.date}</P>
            </PostItem>
          </BlogPostLink>
        ))}
      </PostList>
    </Layout>
  )
}

export default BlogPage
