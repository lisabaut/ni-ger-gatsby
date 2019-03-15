export const getAllMarkdownNodes = edges => edges.map(({ node }) => node)

const filterByTag = (nodes, tag) => nodes.filter(node => node.frontmatter.tag === tag)
const sortByOrder = (a, b) => a.frontmatter.order - b.frontmatter.order
export const getIntroContents = nodes => {
  const intros = filterByTag(nodes, 'intro')
  return intros.sort(sortByOrder)
}

export const getMainContents = nodes => {
  const mains = filterByTag(nodes, 'main')
  return mains.sort(sortByOrder)
}
