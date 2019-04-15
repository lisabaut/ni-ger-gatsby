import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Headline from './headline'

const ColumnsWrap = styled.div`
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
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </SingleColumn>
      ))}
    </ColumnsWrap>
  )
}
Intros.propTypes = {
  introNodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired }),
    html: PropTypes.string.isRequired
  }))
}

export default Intros
