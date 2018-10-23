import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Logo = styled(Img)`
  height: 22px;
  width: 20px;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  @media (max-width: 768px) {
    height: 18px;
    width: 16px;
  }
`;


export default () => (
  <StaticQuery
    query={query}
    render={data => <Logo fixed={data.file.childImageSharp.fixed} />}
  />
);

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 22, width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
