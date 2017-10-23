// @flow
import React, {Component} from 'react'
import { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import withLayout from '../components/Layout'

const imprints = withPostsFilterBy(inCategory('contact'))

export default withLayout(imprints(({ posts }) => (
    <main>
      {
        posts
        .map((post, idx) =>
          <article className='article' key={`article-${idx}`}>
            <Content key={`content-${idx}`} {...post} />
          </article>)
      }
    </main>
  )
))
