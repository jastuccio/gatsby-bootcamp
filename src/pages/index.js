import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h2>
      Web Developer, Sailor, Stargazer, Hockey Player, and all around fun guy...
      but my absolute favorite thing is being a dad.
    </h2>
    <p>
      Need a developer? <Link to="/contact/">Contact me.</Link>
    </p>
  </Layout>
)

export default IndexPage
