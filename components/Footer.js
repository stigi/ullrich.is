// @flow
import React from 'react'

export default () => {
  return <footer>
    <style jsx>{`
      footer {
        font-size: 12px;
        line-height: 14px;
        margin-top: 3rem;
      }
      a,p {
        color: rgb(155, 155, 155);
      }
      @media (prefers-dark-interface) {
        a,p {
          color: rgb(100, 100, 100);
        }
      }
    `}</style>
    <p>
      {/* This site was build with <a href="https://reactjs.org">React</a> and <a href="http://nextein.now.sh">nextein</a>.&nbsp; */}
      <a href="/official">Imprint</a>
      &nbsp;| &nbsp;
      <a href="/legal">Privacy</a>
      &nbsp;| &nbsp;
      <a href="/reachable">Contact</a>
    </p>
  </footer>
}
