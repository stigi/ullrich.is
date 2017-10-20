// @flow
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  distDir: 'build',
  exportPathMap: () => ({
    '/blog': { page: '/blog' },
    '/experienced': { page: '/portfolio' },
    '/official': { page: '/imprint' }
  })
  // place your next config in here!
})
