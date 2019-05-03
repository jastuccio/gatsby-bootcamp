import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 3rem;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query siteAuthorFooter {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <p>Created by {data.site.siteMetadata.author}</p>
    </StyledFooter>
  )
}

export default Footer
