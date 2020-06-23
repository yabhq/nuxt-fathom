;(function(f, a, t, h, o, m) {
  a[h] =
    a[h] ||
    function() {
      ;(a[h].q = a[h].q || []).push(arguments)
    }
  ;(o = f.createElement('script')), (m = f.getElementsByTagName('script')[0])
  o.defer = true
  o.src = t
  o.id = 'fathom-script'
  o.setAttribute('auto', <%= options.auto %>)
  o.setAttribute('honor-dnt', <%= options.honorDoNotTrack %>)
  o.setAttribute('site', '<%= options.siteId %>')
  o.setAttribute('spa', '<%= options.spa %>')
  m.parentNode.insertBefore(o, m)
})(document, window, '<%= options.scriptSrc %>', 'fathom')
