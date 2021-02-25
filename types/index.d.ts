declare module '@nuxt/types' {
  interface NuxtOptions {
    fathom?: {
      /**
       * ID of your site as assigned by Fathom Analytics. Optional here, but you have to set it
       * either by module options or runtime config.
       */
      siteId?: string

      /**
       * Automatically track page views. Optional, defaults to `true`.
       */
      auto?: boolean

      /**
       * Use the canonical URL (if any) instead of the current URL. Optional, defaults to `true`.
       */
      canonical?: boolean

      /**
       * Blacklist one or multiple domains (separate by comma) to exclude them from tracking.
       * Optional.
       */
      excludedDomains?: string

      /**
       * Fathom does not track anything personal or identifiable. If you want to honor DNT regardless,
       * you can. Optional, defaults to `false`.
       */
      honorDoNotTrack?: boolean

      /**
       * Whitelist one or multiple domains (separate by comma) to only track there. Optional.
       */
      includedDomains?: string

      /**
       * Set the navigation mode. Optional, defaults to `'auto'`.
       */
      spa?: 'auto' | 'history' | 'hash'

      /**
       * Support custom domains. Optional, defaults to `'https://cdn.usefathom.com/tracker.js'`.
       */
      scriptSrc?: string
    }
  }
}