import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intros from '../components/intros'
import Main from '../components/main'
import Separator from '../components/separator'

import { getAllMarkdownNodes, getIntroContents, getMainContents } from '../utils/content'

const IndexPage = ({ data }) => {
  const allNodes = getAllMarkdownNodes(data.allMarkdownRemark.edges)
  const intros = getIntroContents(allNodes)
  const mainNodes = getMainContents(allNodes)

  return (
    <Layout>
      <SEO title="Home" />
      <Intros introNodes={intros} />
      <Separator />
      {mainNodes.map(node => (
        <Main key={node.id} title={node.frontmatter.title} content={node.html} />)
      )}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tag
            order
          }
        }
      }
    }
  }
`
