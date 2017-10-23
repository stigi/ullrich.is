// @flow

import React from 'react'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'
import withLayout from '../components/Layout'

const fromBlog = withPostsFilterBy(inCategory('blog', { includeSubCategories: true }))

export default withLayout(fromBlog(({ posts }) => (
    <main>
      {
        posts.map((post, idx) =>
          <article key={`post-${idx}`}>
            <h1>
              <Link href={post.data.url}>
                <a href={post.data.url}>{post.data.title}</a>
              </Link>
            </h1>
            <Content {...post} excerpt/>
          </article>
        )
      }
    </main>
  )
))
