import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme/globalStyles'

import Logo from './logo'
import Header from './header'
import Footer from './footer'
import '../css/reset.css'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;

  @media (min-width: 700px) {
    border-right: 45px solid white;
    border-left: 45px solid white;
  }
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <ThemeProvider theme={theme}>
          <Container>
            <Logo />
            <Header siteTitle={data.site.siteMetadata.title} />
            <Inner>
              <main>{children}</main>
              <Footer />
            </Inner>
            <GlobalStyle />
          </Container>
        </ThemeProvider>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
