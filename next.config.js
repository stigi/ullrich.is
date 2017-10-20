// @flow
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  distDir: 'build',
  exportPathMap: () => ({
    '/blogging': { page: '/blog' },
    '/experienced': { page: '/portfolio' },
    '/here-to-help!': { page: '/hire-me' },
    '/official': { page: '/imprint' }
  })
  // place your next config in here!
})
