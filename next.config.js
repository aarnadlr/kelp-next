const withSass = require('@zeit/next-sass')

module.exports = withSass({
    assetPrefix: '/lightyear/kelp-helix-5',
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    }
  }
)
