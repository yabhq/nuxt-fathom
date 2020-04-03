
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
        spa: 'pushstate' // optional, default to pushstate. https://usefathom.com/support/tracking
    }],
    // ....
]
```
