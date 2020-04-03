const { resolve } = require('path')

function nuxtFathom(options) {
  // Disable if siteId missing
  if ( !options.spa ) {
    options.spa = 'pushstate'
  }
  if ( !options.siteId ) {
    return
  }
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: "fathom.js",
    options,
    ssr: false
  })
}

module.exports = nuxtFathom
module.exports.meta = require('../package.json')