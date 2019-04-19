import React from 'react'
import GlobalStyles from '../global-styles'
import Header from "./header"
import Footer from "./footer"

const Layout = ( props ) => {
  return (
    <div>
    <GlobalStyles />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
