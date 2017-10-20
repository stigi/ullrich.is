// @flow
import React from 'react'
import Link from 'nextein/link'

type PropsType = {
  skipContent?: boolean,
}


export default ({skipContent = false}: PropsType) => {
  return <header>
    <style jsx>{`
      header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
      }
      ul, li {
        display: inline;
      }
      li {
        margin: 8pt;
      }
      p {
        margin: 0px;
      }
      a {
        border: none;
        margin-bottom: 1px;
      }
      a:hover {
        border-bottom: 1px dashed;
        margin-bottom: 0px;
      }
    `}</style>
    { !skipContent &&
      <Link href="/"><a>ullrich.is</a></Link> }
    {!skipContent &&
      <nav>
        <ul>
          <li><a>A</a></li>
          <li><a>B</a></li>
          <li><a>C</a></li>
        </ul>
      </nav>
    }
  </header>
}
