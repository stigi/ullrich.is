const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve('src/templates/pageTemplate.tsx')

  const result = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  )
  const pages = result.data.allMarkdownRemark.edges

  pages.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: pageTemplate,
      context: { pathSlug: path },
    })
  })
}
