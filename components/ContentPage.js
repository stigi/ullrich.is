// @flow
import React, {Component} from 'react'
import { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import withLayout from './Layout'
import Markdown from 'react-markdown'

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

export const withMarkdown = (md: string) => withLayout(() => (
  <main>
    <article className='article'>
      <Markdown source={md}/>
    </article>
  </main>
))
