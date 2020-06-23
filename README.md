
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
        spa: 'pushstate' // optional, defaults to pushstate. https://usefathom.com/support/tracking
        scriptSrc: 'https://bluedonkey.example.com/script.js', // optional, defaults to `https://cdn.usefathom.com/tracker.js`. https://usefathom.com/support/custom-domains
    }],
    // ....
]
```
