import React from 'react'
import PropTypes from 'prop-types'

import Headline from './headline'

const Main = ({ title, content }) => (
  <>
    <Headline keepLeft={true}>{title}</Headline>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </>
)
Main.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
export default Main
