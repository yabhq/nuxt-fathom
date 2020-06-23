
# Nuxt Fathom

Implement Fathom analytics in your Nuxt app.

## Quick Install

```
$ npm i @yabhq/nuxt-fathom
```
In your **nuxt.config.js**:
```JavaScript
modules: [
    // ....
    ['@yabhq/nuxt-fathom', {
        siteId: 'XXXXXX', // required

        // Advanced configuration. See here for details: https://usefathom.com/support/tracking-advanced
        auto: true, // optional, defaults to `true` (automatically track page views)
        canonical: true, // optional, defaults to `true`
        excludedDomains: 'example.com,localhost', // optional, defaults to ''
        includedDomains: 'example.com,localhost', // optional, defaults to ''
        spa: 'pushstate', // optional, defaults to 'pushstate'. https://usefathom.com/support/tracking
        scriptSrc: 'https://bluedonkey.example.com/script.js', // optional, defaults to 'https://cdn.usefathom.com/tracker.js'. https://usefathom.com/support/custom-domains
        honorDoNotTrack: false, // optional, defaults to `false`
    }],
    // ....
]
```
