import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

import Footer from './Footer'
import Header from './Header'

interface Props {
  emptyHeader?: boolean
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    color: rgb(40, 40, 40);
    background-color: rgb(245, 245, 245);
    font-size: 20px;
    line-height: 1.7rem;
    font-weight: 200;
    font-family:
      /* https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/ */
      /* 1 */ -apple-system, BlinkMacSystemFont,
      /* 2 */ "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      /* 3 */ "Helvetica Neue", sans-serif;
  }
  @media (max-width: 768px) {
    html {
      font-size: 15px;
      line-height: 1.4rem;
    }
  }
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    -webkit-text-size-adjust: 100%;
  }
  a {
    color: rgb(10, 10, 10);
    text-decoration: none;
    border-bottom: 1px dashed;
  }
  p {
    hanging-punctuation: first;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
  article p {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
  h1,h2,h3 {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.1rem;
  }
  h3 {
    font-size: 0.9rem;
  }
  li {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  li h1 {
    font-size: 1rem;
    font-weight: 300;
  }
  @media (prefers-color-scheme: dark) {
    html {
      color: rgb(245, 245, 245);
      background-color: rgb(40, 40, 40);
    }
    a {
      color: rgb(245, 245, 245);
    }
  }
`

const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  width: 35rem;
  max-width: 100vw;
  max-width: calc(100vw - 2.5rem);
`

const Layout = ({ emptyHeader = false, children }: Props) => (
  <LayoutComponent>
    <Helmet>
      <title>What's Ullrich up to? 🤔</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="en-us" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Ullrich Schäfer" />
      <meta
        name="keywords"
        // tslint:disable-next-line:max-line-length
        content="Ullrich Schäfer, Ullrich Schaefer, Ullrich Schafer, iOS, Objective-C, Swift, ReactNative, React, Javascript, ES6, Android, pitch, pitch.io, nxtbgthng, evenly, Facebook, Soundcloud, Arte, Digital Concert Hall"
      />

      <meta property="og:title" content={"What's Ullrich up to? 🤔"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ullrich.is" />
      <meta property="og:url" content="http://ullrich.is" />
      <meta property="og:description" content="Ullrich is a mobile software engineer and your best friend." />
      <meta property="og:image" content="http://ullrich.is/static/ulli.jpg" />
      <meta property="og:image:alt" content="Ullrich wearing a cap, standing on the beach and blinking into the sun." />
      <link rel="self" href="https://ullrich.is/" />
      <link rel="webmention" href="https://webmention.io/ullrich.is/webmention" />
      <link rel="me" href="https://toot.cat/@ullrich" />
      <link rel="me" href="https://github.com/stigi" />
      <link rel="me" href="https://gravatar.com/stigi" />
      <link rel="me" href="https://linkedin.com/in/ullrichschaefer" />
      <link rel="me" href="https://facebook.com/ullrich" />
      <link rel="me" href="https://instagram.com/stigi" />
      <link rel="me" href="https://twitter.com/stigi" />
      <link rel="me" href="https://x.com/stigi" />
    </Helmet>
    <GlobalStyle />
    <Header emptyHeader={emptyHeader} />
    {children}
    <Footer />
  </LayoutComponent>
)

export default Layout
