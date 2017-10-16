// @flow
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

export default withPosts(({ posts }) => {
  return (
    <main>
      {
        posts.map((post, index) => (
          <article key={`post-${index}`}>
            <h1>
              <Link {...post}>
                <a>{post.data.title}</a>
              </Link>
            </h1>
          </article>
        ))
      }
    </main>
  )
})
