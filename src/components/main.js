import React from 'react'

import Headline from './headline'

const Main = ({ title, content }) => (
  <>
    <Headline keepLeft={true}>{title}</Headline>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </>
)
export default Main
