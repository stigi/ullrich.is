// @flow
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {
  return (
    <main>
      {
        posts.map((post, index) => (
          <article key={`post-${index}`}>
            <h1>{post.data.title}</h1>
            <Content {...post} />
          </article>
        ))
    }
    </main>
  )
})
