import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Separator from '../components/separator'

const Container = styled.footer`
  margin: 0 auto;
  max-width: 700px;
  padding: 1.45rem;
  text-align: center;
`

const Footer = ({ data }) => (
  <StaticQuery
    query={graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <Container>
          <Separator />
          <p>© {new Date().getFullYear()} - {data.site.siteMetadata.title}
            {` | `}
            <Link to="/">Home</Link>
            {` | `}
            <Link to="/imprint/">Impressum</Link>
          </p>
        </Container>
      )
    }}
  />
)

export default Footer
