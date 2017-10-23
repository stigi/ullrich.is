// @flow
import React, {Component} from 'react'
import { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import withLayout from '../components/Layout'

const imprints = withPostsFilterBy(inCategory('imprint'))

export default withLayout(imprints(({ posts }) => (
    <main>
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
