import { createBlogPages } from './lib/createBlogPages'
import { createContentPages } from './lib/createContentPages'
import { GatsbyCreatePages } from './lib/types'

export const createPages: GatsbyCreatePages = async options => {
  await createContentPages(options)
  await createBlogPages(options)
}
