// @flow
const nexteinConfig = require('nextein/config').default
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = nexteinConfig({
  distDir: 'build',
  exportPathMap: () => ({
    '/blogging': { page: '/blog' },
    '/experienced': { page: '/portfolio' },
    '/here-to-help!': { page: '/hire-me' },
    '/official': { page: '/imprint' },
    '/legal': { page: '/privacy' },
    '/reachable': { page: '/contact' }
  }),
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    return config
  }
})
