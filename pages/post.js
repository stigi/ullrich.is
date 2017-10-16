// @flow
import React from  'react'
import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {
  return (
    <main>
      <article>
        <h1>{post.data.title}</h1>
        <Content {...post} />
      </article>
    </main>
  )
})
