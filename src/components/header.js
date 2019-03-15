import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import headerImage from '../images/header-1.jpg'

const Container = styled.header`
    background: url(${ headerImage }) no-repeat center center;
    background-size: cover;
`

const HeadlinesWrap = styled.div`
    padding: 2rem 1.0875rem 1.45rem;
    text-align: center;
    margin-bottom: 15px;

    @media (min-width: 700px) {
      margin-bottom: 30px;
    }
`

const Headline = styled.h2`
    font-style: normal;

    @media (min-width: 700px) {
      font-size: 2rem;
      line-height: 1.3;
    }
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeroTextsQuery {
        site {
          siteMetadata {
            heroTexts
          }
        }
      }
    `}
    render={data => {
      const texts = data.site.siteMetadata.heroTexts
      return (
        <Container>
          <HeadlinesWrap>
            {texts.map((text, index) => (
              <Headline key={index}>
                {text}
              </Headline>
            ))}
          </HeadlinesWrap>
        </Container>
      )
    }}
  />
)

export default Header
