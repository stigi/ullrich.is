import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { BlogIndexPostFragment } from '../../generated/graphql'

const Article = styled.article`
  margin: 2em auto;
`

const Title = styled.h2`
  margin-top: 0rem;
  margin-bottom: 0rem;
`

const Date = styled.span``

const Description = styled.span``

export default ({ post }: { post: BlogIndexPostFragment }) => {
  const frontmatter = post.childMarkdownRemark!.frontmatter!
  return (
    <Article>
      <Title>
        <a href={frontmatter.path!}>{frontmatter.title}</a>
        {/* - <Date>{frontmatter.date}</Date> */}
      </Title>
      <Description>{frontmatter.description}</Description>
    </Article>
  )
}

export const query = graphql`
  fragment BlogIndexPost on File {
    childMarkdownRemark {
      frontmatter {
        title
        path
        date
        description
      }
    }
  }
`
