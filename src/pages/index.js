import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go buiasdfld something great.</p>
    <Link to="/page-2/">Go to page 2 {React.version} </Link>
    <Button variant='outlined'>
      hi
    </Button>
  </div>
)

export default IndexPage
