// @flow

import React from 'react'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

const fromBlog = withPostsFilterBy(inCategory('blog', { includeSubCategories: true }))

export default fromBlog(({ posts }) => (
    <main>
      {
        posts.map((post, idx) => <Content key={`post-${idx}`} {...post} excerpt />)
      }
    </main>
  )
)
