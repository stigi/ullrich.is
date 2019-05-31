import { createContentPages } from './createContentPages'
import { GatsbyCreatePages } from './types'

export const createPages: GatsbyCreatePages = async options => {
  await createContentPages(options)
}
