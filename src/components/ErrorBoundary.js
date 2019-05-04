import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error, errorInfo })
  }

  render() {
    const { errorInfo, error } = this.state
    const { children } = this.props

    if (errorInfo) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h2>{'SOMETHING_WENT_WRONG'}</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return children
  }
}
