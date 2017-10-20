// @flow
import React from 'react'
import Link from 'nextein/link'

export default () => {
  return <footer>
    <style jsx>{`
      footer {
        font-size: 12px;
        line-height: 14px;
        margin-top: 3rem;
      }
      a {
        color: rgb(200, 200, 200);
      }
    `}</style>
    <p>
      {/* This site was build with <Link href="https://reactjs.org"><a>React</a></Link> and <Link href="http://nextein.now.sh"><a>nextein</a></Link>.&nbsp; */}
      <Link as="/official" href="/imprint"><a>Imprint</a></Link>
    </p>
  </footer>
}
