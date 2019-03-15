import React from 'react'
import styled from 'styled-components'

import Headline from './headline'

const ColumnsWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 700px) {
    display: flex;
  }
`

const SingleColumn = styled.div`
  flex: 1;
  margin: 25px 0;

  @media (min-width: 700px) {
    text-align: center;
  }
`

const Intros = ({ introNodes }) => {
  return (
    <ColumnsWrap>
      {introNodes.map(node => (
        <SingleColumn key={node.id}>
          <Headline>{node.frontmatter.title}</Headline>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </SingleColumn>
      ))}
    </ColumnsWrap>
  )
}

export default Intros
