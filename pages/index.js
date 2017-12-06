// @flow
import React, {Component} from 'react'
import withLayout from '../components/Layout'
import Bubble from '../components/Bubble'
import Link from 'next/link'

class Index extends Component<any> {
  static async getInitialProps(...args) {
    return {skipHeader: true}
  }

  render() {
    return <main>
      <style jsx>{`
        #hero {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }
        #moneyshot {
          width: 150px;
          height: 150px;
          margin-right: 2.3rem;
          clip-path: circle(50% at center);
          -webkit-clip-path: circle(50% at center);
        }
        @media (max-width: 768px) {
          #moneyshot {
            width: 90px;
            height: 90px;
            margin-right: 1.4rem;
          }
        }

        p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        #hero h1 {
          font-size: 36px;
          line-height: 1.4em;
          font-weight: 300;
        }
        @media (max-width: 768px) {
          #hero h1 {
            font-size: 26px;
          }
        }
      `}</style>
      <div id="hero">
        <img id="moneyshot" src="./static/ulli.jpg" srcSet="./static/ulli@2x.jpg 2x" />
        <h1>
          <i>Hi,</i> 👋<br/>
          I'm Ullrich.
        </h1>
        {/* <Bubble /> */}
      </div>
      <p>
        I'm a mobile software engineer with <Link as="/experienced" href="/portfolio" prefetch><a>9 years of experience</a></Link> in the industry.
      </p>
      <p>
        I'm available for <Link as="/here-to-help!" href="/hire-me" prefetch><a>contract work</a></Link>. Let's talk about what I can do for you.
      </p>
      {/* <p>You can check out <a href="/blogging">my blog</a> where I write about Swift, JavaScript, ReactNative and mobile in general.</p> */}
      <p>✌️</p>
    </main>
  }
}

export default withLayout(Index)
