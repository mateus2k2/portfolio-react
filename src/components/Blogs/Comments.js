import React, { useEffect } from 'react'

const Commento = ({ pageId }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.commento) {
      // init empty object so commento.js script extends this with global functions
      window.commento = {}
      const script = document.createElement('script')
      // Replace this with the url to your commento instance's commento.js script
      script.src = `https://appcommento.88367832.xyz/js/commento.js`
      script.defer = true
      // Set default attributes for first load
      script.setAttribute('data-auto-init', false)
      script.setAttribute('data-page-id', pageId)
      script.setAttribute('data-id-root', 'commento-box')
      script.id = 'commento-script'
      script.onload = () => {
        // Tell commento.js to load the widget
        window.commento.main()
      }
      document.getElementsByTagName('head')[0].appendChild(script)
    } 
    else if (typeof window !== 'undefined' && window.commento.reInit) {
      window.commento = {}
      const script = document.createElement('script')
      script.src = `https://appcommento.88367832.xyz/js/commento.js`
      script.defer = true
      script.setAttribute('data-auto-init', false)
      script.setAttribute('data-page-id', pageId)
      script.setAttribute('data-id-root', 'commento-box')
      script.id = 'commento-script'
      script.onload = () => {
        window.commento.main()
      }
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }, [pageId])

  return <div id="commento-box" />
}

export default Commento