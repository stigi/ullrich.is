import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import { PostTemplateQuery } from '../generated/graphql'

const Template = ({ data }: { data: PostTemplateQuery }) => (
  <Layout>
    <main>
      {data.markdownRemark && data.markdownRemark.html && (
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      )}
      }
    </main>
  </Layout>
)

export const query = graphql`
  query PostTemplate($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
    }
  }
`

export default Template
