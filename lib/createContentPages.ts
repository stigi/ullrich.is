import { resolve } from 'path'

import { ContentPagesMarkdownQuery } from '../src/generated/graphql'

import { CreatePagesOptions } from './types'

export const createContentPages = async ({ graphql, boundActionCreators: { createPage } }: CreatePagesOptions) => {
  const pageTemplate = resolve('src/templates/pageTemplate.tsx')

  const allMarkdown: { data: ContentPagesMarkdownQuery } = await graphql(`
    query ContentPagesMarkdown {
      allFile(filter: { sourceInstanceName: { eq: "pages" }, ext: { eq: ".md" } }) {
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
  `)

  const pages = allMarkdown.data.allFile.edges || []
  pages.forEach(edge => {
    const { path } = edge.node.childMarkdownRemark.frontmatter
    createPage({
      path,
      component: pageTemplate,
      context: { pathSlug: path },
    })
  })
}
