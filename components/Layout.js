// @flow
import React, { Component } from 'react'
import MetaHead from './MetaHead'
import Header from './Header'
import Footer from './Footer'

export default (WrappedComponent: any) => {
  class WithLayout extends Component<Object> {
    static async getInitialProps(...args) {
      const wrappedInitial = WrappedComponent.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped
    }

    render() {
      return (
        <div id="layout">
          <style jsx>{`
            #layout {
              display: flex;
              flex-direction: column;
              flex-wrap: nowrap;
              align-items: stretch;
              width: 35rem;
              max-width: 100vw;
              max-width: calc(100vw - 2.5rem);
            }
          `}</style>
          <MetaHead title={this.props.title} />
          <Header skipContent={this.props.skipHeader}/>
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      )
    }
  }
  WithLayout.displayName = `WithLayout(${WrappedComponent.displayName})`;
  return WithLayout
}
