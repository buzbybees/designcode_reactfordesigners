import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome</h1>
    <p>This is my new space.</p>
    <p>Coming soon</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage