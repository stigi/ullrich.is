import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import MoneyShot from '../components/MoneyShot'

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Heading = styled.h1`
  font-size: 36px;
  line-height: 1.4em;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Paragraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export default () => (
  <Layout emptyHeader={true}>
    <main>
      <Hero>
        <MoneyShot />
        <Heading>
          <i>Hi,</i> 👋
          <br />
          I'm Ullrich.
        </Heading>
        {/* <Bubble /> */}
      </Hero>
      <Paragraph>
        I'm a mobile software engineer with{' '}
        <Link to="/experienced">
          <a>10 years of experience</a>
        </Link>{' '}
        in the industry.
      </Paragraph>
      {false ? (
        <Paragraph>
          I'm available for{' '}
          <Link to="/here-to-help!">
            <a>contract work</a>
          </Link>
          . Let's talk about what I can do for you.
        </Paragraph>
      ) : (
        <Paragraph>
          I am currently working at <a href="http://evenly.io">evenly</a> as their head of engineering.
          <br />
          Before that I was part of Facebooks Newsfeed team, co-founded <a href="https://nxtbgthng.com">
            nxtbgthng
          </a>{' '}
          and build an app for a tiny startup called <a href="https://soundcloud.com">SoundCloud</a>.
        </Paragraph>
      )}
      {false && (
        <Paragraph>
          You can check out <a href="/blogging">my blog</a> where I write about Swift, JavaScript, ReactNative and
          mobile in general.
        </Paragraph>
      )}
      <Paragraph>✌️</Paragraph>
    </main>
  </Layout>
)
