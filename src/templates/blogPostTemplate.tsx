import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import { PostTemplateQuery } from '../generated/graphql'

const Template = ({ data }: { data: PostTemplateQuery }) => (
  <Layout>
    <main>
      <article>
        <h1>{data.markdownRemark!.frontmatter!.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark!.html! }} />
        <small>Written on {data.markdownRemark!.frontmatter!.date}</small>
      </article>
    </main>
  </Layout>
)

export const query = graphql`
  query PostTemplate($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default Template
