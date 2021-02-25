const { resolve } = require('path')

function nuxtFathom(moduleOptions) {
  const { nuxt } = this

  const defaultOptions = {
    auto: true,
    canonical: true,
    excludedDomains: '',
    honorDoNotTrack: false,
    includedDomains: '',
    spa: 'auto',
    scriptSrc: 'https://cdn.usefathom.com/tracker.js'
  }

  // Combine options
  const options = {
    ...defaultOptions,
    ...nuxt.options.fathom,
    ...moduleOptions,
    ...(nuxt.options.publicRuntimeConfig && nuxt.options.publicRuntimeConfig.fathom)
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