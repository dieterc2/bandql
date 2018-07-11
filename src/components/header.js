import React from 'react'
import Link from 'gatsby-link'

const ListLink = props =>
<li style={{ display: `inline-block`, marginRight: `1rem` }}>
  <Link to={props.to} style={{ color: `white`, textDecoration: 'none'}}>
    {props.children}
  </Link>
</li>

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'inline' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>      
      <ul style={{ display: 'inline', float: 'right', padding: '1rem'}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  </div>
)

export default Header
