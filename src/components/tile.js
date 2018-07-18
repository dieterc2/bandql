import React from 'react'
import Link from 'gatsby-link'

const Tile = ({ siteTitle }) => (
  <div style={{
      background: 'silver',
      margin: '1.45rem',
      borderRadius: '25px'
    }}
  >
    <div style={{
        margin: '1.45rem'
      }}
    >
      <h4>Title</h4>
      <hr />
      <p>
          Description
      </p>
    </div>
  </div>
)

export default Tile