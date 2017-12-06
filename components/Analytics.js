// @flow
import React from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'
import Router from 'next/router'

// Pretty much what's described here:
// https://gist.github.com/trezy/e26cb7feb2349f585d2daf449411d0a4

const gaTrackingId = 'UA-10108913-2'

Router.onRouteChangeComplete = () => {
  ReactGA.initialize(gaTrackingId)
  ReactGA.set({ anonymizeIp: true })
  ReactGA.pageview(window.location.pathname)
}

export default () => (<Head>
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
  <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || []
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '${gaTrackingId}', {'anonymize_ip': true})
        `}} />
</Head>)
