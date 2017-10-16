// @flow
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  distDir: 'build',
  exportPathMap: () => ({
    '/blog': { page: '/blog' }
  })
  // place your next config in here!
})
