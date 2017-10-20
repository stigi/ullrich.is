// @flow
import React, {Component} from 'react'
import { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import withLayout from '../components/Layout'

const imprints = withPostsFilterBy(inCategory('imprint'))

export default withLayout(imprints(({ posts }) => (
    <main>
      <style jsx>{`
        hr {
          margin-top: 3rem;
          margin-bottom: 3rem;
        }`}</style>
      <style jsx global>{`
        .imprint h1,h2,h3 {
          font-weight: 600;
          margin-left: 0.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .imprint h1 {
          font-size: 28px;
          line-height: 29px;
        }
        .imprint h2 {
          font-size: 24px;
          line-height: 25px;
        }
        .imprint h3 {
          font-size: 18px;
          line-height: 22px;
        }
        .imprint p {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        `}</style>
      {
        posts
        .map((post, idx) =>
          <article className='imprint' key={`article-${idx}`}>
            <Content key={`content-${idx}`} {...post} />
          </article>)
        .reduce((prev, curr) => [prev, <hr key='dummy' />, curr])
      }
    </main>
  )
))
