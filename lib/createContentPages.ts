import { resolve } from 'path'

import { ContentPagesMarkdownQuery } from '../src/generated/graphql'

import { CreatePagesOptions } from './types'

export const createContentPages = async ({ graphql, boundActionCreators: { createPage } }: CreatePagesOptions) => {
  const pageTemplate = resolve('src/templates/pageTemplate.tsx')

  const allMarkdown: {
    data: ContentPagesMarkdownQuery
  } = await graphql(//
  // Using GraphQL magic comment, because we don't compile the query here i.e. graphql`...` but
  // execute it right away i.e. graphql(`...`), so codegen does recognize this query
  /* GraphQL */ `
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

  if (allMarkdown.data.allFile && allMarkdown.data.allFile.edges) {
    allMarkdown.data.allFile.edges.forEach(edge => {
      if (
        edge &&
        edge.node &&
        edge.node.childMarkdownRemark &&
        edge.node.childMarkdownRemark.frontmatter &&
        edge.node.childMarkdownRemark.frontmatter.path
      ) {
        const path = edge.node.childMarkdownRemark.frontmatter.path
        createPage({
          path,
          component: pageTemplate,
          context: { pathSlug: path },
        })
      }
    })
  }
}
