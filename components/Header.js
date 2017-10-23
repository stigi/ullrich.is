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
        color: rgb(100,100,100);
      }
      a:hover {
        border-bottom: 1px dashed;
        margin-bottom: 0px;
      }
      #brand {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
      #logo {
        height: 22px;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
      }
      @media (max-width: 768px) {
        #logo {
          height: 18px;
        }
      }
    `}</style>
    { !skipContent &&
      <div id="brand">
        <img id="logo" src="/static/logo-tiny.png" srcSet="/static/logo-tiny@2x.png 2x" />
        &nbsp;
        <Link href="/"><a>ullrich.is</a></Link>
      </div> }
    {!skipContent &&
      <nav>
        <ul>
          <li>
            <Link as="/reachable" href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </nav>
    }
  </header>
}
