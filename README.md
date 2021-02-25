# Nuxt Fathom

Implement [Fathom Analytics](https://usefathom.com/) in your Nuxt app.

## Installation

```
$ npm i -D @yabhq/nuxt-fathom
```

## Configuration

Configure the module in your `nuxt.config.js`:

```JavaScript
export default {
    buildModules: [
        '@yabhq/nuxt-fathom'
    ],
    fathom: {
        siteId: 'XXXXXX', // required

        // Advanced configuration
        // See here for details: https://usefathom.com/support/tracking-advanced

        auto: true,
        // optional, defaults to `true` (automatically track page views)

        canonical: true,
        // optional, defaults to `true`

        excludedDomains: 'example.com,localhost',
        // optional, defaults to ''

        honorDoNotTrack: false,
        // optional, defaults to `false`

        includedDomains: 'example.com,localhost',
        // optional, defaults to ''

        scriptSrc: 'https://bluedonkey.example.com/script.js',
        // optional, defaults to 'https://cdn.usefathom.com/tracker.js'
        // See here for details: https://usefathom.com/support/custom-domains

        spa: 'auto',
        // optional, defaults to 'auto'
    },
]
```

### Runtime Config

You can also use the [Runtime Config](https://nuxtjs.org/guide/runtime-config):

```JavaScript
export default {
    // ...
    publicRuntimeConfig: {
        fathom: {
            siteId: process.env.FATHOM_SITE_ID,
        }
    }
}
```

### TypeScript

You can benefit from types inside your `nuxt.config.ts` by adding the module to your
`tsconfig.json`:

```json
    "types": [
      "@yabhq/nuxt-fathom"
    ]
```