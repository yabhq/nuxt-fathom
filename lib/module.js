const { resolve } = require('path')

function nuxtFathom(options) {
  if ( typeof options.auto !== 'boolean' ) {
    options.auto = true
  }

  if ( typeof options.canonical !== 'boolean' ) {
    options.canonical = true
  }

  if ( !options.excludedDomains ) {
    options.excludedDomains = ''
  }

  if ( typeof options.honorDoNotTrack !== 'boolean' ) {
    options.honorDoNotTrack = false
  }

  if ( !options.includedDomains ) {
    options.includedDomains = ''
  }

  if ( !options.spa ) {
    options.spa = 'auto'
  }

  if ( !options.scriptSrc ) {
    options.scriptSrc = 'https://cdn.usefathom.com/tracker.js'
  }

  // Disable if siteId missing
  if ( !options.siteId ) {
    return
  }

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'fathom.js',
    options,
    ssr: false
  })
}

module.exports = nuxtFathom
module.exports.meta = require('../package.json')