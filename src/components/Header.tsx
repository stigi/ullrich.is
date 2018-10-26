import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

interface Props {
  emptyHeader?: boolean;
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Link = styled.a`
  border: none;
  margin-bottom: 1px;
  color: rgb(100, 100, 100);
  &:hover {
    border-bottom: 1px dashed;
    margin-bottom: 0px;
  }
  @media (prefers-color-scheme: dark) {
    color: rgb(155, 155, 155);
  }
`;

const HeaderComponent = ({ emptyHeader }: Props) => (
  <Header>
    {!emptyHeader && (
      <>
        <Brand>
          <HeaderLogo />
          &nbsp;
          <Link href="/">ullrich.is</Link>
        </Brand>{" "}
        <nav>
          <ul style={{ display: "inline" }}>
            <li style={{ display: "inline", margin: "8pt" }}>
              <Link href="/reachable">Contact</Link>
            </li>
          </ul>
        </nav>
      </>
    )}
  </Header>
);

export default HeaderComponent;
