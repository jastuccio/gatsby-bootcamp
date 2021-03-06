import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import styled from 'styled-components'
import { black, gray200, gray300, gray700 } from '../utilities'

import Layout from '../components/layout'
import Head from '../components/head'

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
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="blog" />
      <h1>Blog</h1>
      <PostList>
        {data.allContentfulBlogPost.edges.map(edge => (
          <BlogPostLink to={`/blog/${edge.node.slug}`}>
            <PostItem>
              <H2>{edge.node.title}</H2>
              <P>{edge.node.publishedDate}</P>
            </PostItem>
          </BlogPostLink>
        ))}
      </PostList>
    </Layout>
  )
}

export default BlogPage
