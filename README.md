# Nuxt Fathom

Implement Fathom analytics in your Nuxt app.

## Quick Install

```
$ npm i @yabhq/nuxt-fathom
```

Configure the module in your **nuxt.config.js**:

```JavaScript
modules: [
    // ....
    ['@yabhq/nuxt-fathom', {
        siteId: 'XXXXXX', // required

        // Advanced configuration. See here for details: https://usefathom.com/support/tracking-advanced
        auto: true, // optional, defaults to `true` (automatically track page views)
        canonical: true, // optional, defaults to `true`
        excludedDomains: 'example.com,localhost', // optional, defaults to ''
        honorDoNotTrack: false, // optional, defaults to `false`
        includedDomains: 'example.com,localhost', // optional, defaults to ''
        scriptSrc: 'https://bluedonkey.example.com/script.js', // optional, defaults to 'https://cdn.usefathom.com/tracker.js'. See here for details: https://usefathom.com/support/custom-domains
        spa: 'auto', // optional, defaults to 'auto'
    }],
    // ....
]
```
