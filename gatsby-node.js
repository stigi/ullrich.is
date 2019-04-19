const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve('src/templates/pageTemplate.tsx')

  const result = await graphql(
    `
      query {
        allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      }
    `
  )
  const pages = result.data.allFile.edges

  pages.forEach(({ node }) => {
    const maybeMarkdown = node.childMarkdownRemark
    if (maybeMarkdown) {
      const path = maybeMarkdown.frontmatter.path
      createPage({
        path,
        component: pageTemplate,
        context: { pathSlug: path },
      })
    }
  })
}
