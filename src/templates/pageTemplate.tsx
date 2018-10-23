import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Template = ({
  data: {
    markdownRemark: { html }
  }
}) => (
  <Layout>
    <main>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  </Layout>
);

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
    }
  }
`;

export default Template;
