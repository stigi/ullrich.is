import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import { MoneyShotQuery } from '../generated/graphql'

const MoneyShot = styled(Img)`
  width: 150px;
  height: 150px;
  margin-right: 2.3rem;
  clip-path: circle(50% at center);
  -webkit-clip-path: circle(50% at center);
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    margin-right: 1.4rem;
  }
`
const render = (data: MoneyShotQuery) =>
  data.file &&
  data.file.childImageSharp &&
  data.file.childImageSharp.fixed && <MoneyShot fixed={data.file.childImageSharp.fixed} />

export default () => <StaticQuery query={query} render={render} />

const query = graphql`
  query MoneyShot {
    file(relativePath: { eq: "ulli.jpg" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
