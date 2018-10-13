// @flow
import React from 'react'
import Head from 'next/head'
import FavIcon from './FavIcon'
import Analytics from './Analytics'

type PropsType = {
  title: string,
}

export default ({title = "ullrich.is ✌️" }: PropsType) => {
  return (
    <div>
      <style jsx global>{`
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
        @media (prefers-dark-interface) {
          html {
            color: rgb(245, 245, 245);
            background-color: rgb(40, 40, 40);
          }
          a {
            color: rgb(245, 245, 245);
          }
        }
      `}
      </style>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='content-language' content='en-us' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Ullrich Schäfer' />
        <meta name='keywords' content='Ullrich Schäfer, Ullrich Schaefer, Ullrich Schafer, iOS, Objective-C, Swift, ReactNative, React, Javascript, ES6, Android, nxtbgthng, evenly, Facebook, Soundcloud, Arte, Digital Concert Hall' />

        <meta property='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='ullrich.is' />
        <meta property='og:url' content='http://ullrich.is' />
        <meta property='og:description' content='Ullrich is a mobile software engineer and your best friend.' />
        <meta property='og:image' content='http://ullrich.is/static/ulli.jpg' />
        <meta property='og:image:alt' content='Ullrich wearing a cap, standing on the beach and blinking into the sun.' />
      </Head>
      <FavIcon />
      <Analytics />
    </div>
  )
}
