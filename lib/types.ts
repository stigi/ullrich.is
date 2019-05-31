type graphql = (query: string) => any

export interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}

export interface CreatePagesOptions {
  graphql: graphql
  boundActionCreators: BoundActionCreators
}

export type GatsbyCreatePages = (fns: CreatePagesOptions) => void
