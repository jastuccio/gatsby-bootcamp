import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

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
  return <p> Created by {data.site.siteMetadata.author}</p>
}

export default Footer
