import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

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
`;

export default () => (
  <StaticQuery
    query={query}
    render={data => <MoneyShot fixed={data.file.childImageSharp.fixed} />}
  />
);

const query = graphql`
  query {
    file(relativePath: { eq: "ulli.jpg" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
