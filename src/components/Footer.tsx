import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  font-size: 12px;
  line-height: 14px;
  margin-top: 3rem;
`;

const FooterParagraph = styled.p`
  color: rgb(155, 155, 155);
  @media (prefers-color-scheme: dark) {
    color: rgb(100, 100, 100);
  }
`;

const FooterLink = styled.a`
  color: rgb(155, 155, 155);
  @media (prefers-color-scheme: dark) {
    color: rgb(100, 100, 100);
  }
`;

const FooterComponent = () => (
  <Footer>
    <FooterParagraph>
      {/* This site was build with <a href="https://reactjs.org">React</a> and <a href="http://nextein.now.sh">nextein</a>.&nbsp; */}
      <FooterLink href="/official">Imprint</FooterLink>
      &nbsp;| &nbsp;
      <FooterLink href="/legal">Privacy</FooterLink>
      &nbsp;| &nbsp;
      <FooterLink href="/reachable">Contact</FooterLink>
    </FooterParagraph>
  </Footer>
);

export default FooterComponent;
