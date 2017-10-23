// @flow
import React, {Component} from 'react'
import { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import withLayout from './Layout'

export default ((category: string) => {
  const loadContent = withPostsFilterBy(inCategory(category))

  return withLayout(loadContent(({ posts }) => (
    <main>
      {
        posts
        .map((post, idx) =>
          <article className='article' key={`article-${idx}`}>
            <Content key={`content-${idx}`} {...post} />
          </article>)
      }
    </main>
  )))
})
