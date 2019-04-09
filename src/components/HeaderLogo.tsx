import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import { HeaderLogoQuery } from '../generated/graphql'

const Logo = styled(Img)`
  height: 22px;
  width: 20px;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  @media (max-width: 768px) {
    height: 18px;
    width: 16px;
  }
`

const render = (data: HeaderLogoQuery) =>
  data.file &&
  data.file.childImageSharp &&
  data.file.childImageSharp.fixed && <Logo fixed={data.file.childImageSharp.fixed} />

export default () => <StaticQuery query={query} render={render} />

const query = graphql`
  query HeaderLogo {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 22, width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
