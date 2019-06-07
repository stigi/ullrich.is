import { resolve } from 'path'

import { BlogPostsMarkdownQuery } from '../src/generated/graphql'

import { CreatePagesOptions } from './types'

export const createBlogPages = async ({ graphql, boundActionCreators: { createPage } }: CreatePagesOptions) => {
  const pageTemplate = resolve('src/templates/blogPostTemplate.tsx')

  const allMarkdown: {
    data: BlogPostsMarkdownQuery
  } = await graphql(// Using GraphQL magic comment, because we don't compile the query here i.e. graphql`...` but
  // execute it right away i.e. graphql(`...`), so codegen does recognize this query
  /* GraphQL */ `
    query BlogPostsMarkdown {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" }, ext: { eq: ".md" } }
        limit: 1000
        sort: { order: DESC, fields: [name] }
      ) {
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
    // Create individual post pages
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
