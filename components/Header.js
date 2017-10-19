// @flow
import React from 'react'

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
    `}</style>
    { !skipContent &&
      <p>ullrich.is</p> }
    {!skipContent &&
      <nav>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </nav>
    }
  </header>
}
