import React from 'react'
import styled from 'styled-components'

const Separator = styled.span`
  display: block;
  margin: 10px 0;
  width: 35px;
  height: 1px;
  background: ${ props => props.theme.textColor };

  @media (min-width: 700px) {
    width: 125px;
    ${ props => !props.keepLeft && `margin: 10px auto;` }
  }
`
const Head = styled.h2`
  margin: 0
`

const Headline = ({ children, keepLeft }) => (
  <>
    <Head>{children}</Head>
    <Separator keepLeft={keepLeft}/>
  </>
)

export default Headline
