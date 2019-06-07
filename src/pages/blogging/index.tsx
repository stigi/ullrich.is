import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import { BlogIndexQuery } from '../../generated/graphql'

import BlogIndexPost from './BlogIndexPost'

const Intro = styled.section`
  margin-bottom: 2rem;
`

const Heading = styled.h1``

const Paragraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export default ({ data }: { data: BlogIndexQuery }) => (
  <Layout>
    <main>
      <Intro>
        <Heading>I blog. You read?</Heading>
        <Paragraph>
          I used to occasionally publish content on <a href="http://medium.com/stigi">medium.com</a>. My long term plan
          is to host all content, new and old, on this domain.
        </Paragraph>
      </Intro>

      {data.allFile!.edges!.map(edge => (
        <BlogIndexPost key={edge!.node!.id!} post={edge!.node!} />
      ))}
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndex {
    allFile(
      filter: { sourceInstanceName: { eq: "posts" }, ext: { eq: ".md" } }
      limit: 1000
      sort: { order: DESC, fields: [name] }
    ) {
      edges {
        node {
          id
          ...BlogIndexPost
        }
      }
    }
  }
`
