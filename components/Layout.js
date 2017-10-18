// @flow
import React, { Component } from 'react'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default (Wrapped) => {
  return class extends Component {

    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    render() {
      return <div style={layoutStyle}>
        <Wrapped {...this.props} />
      </div>
    }
  }
}
