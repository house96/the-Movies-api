import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from '../store'
import ErrorBoundary from '../components/ErrorBoundary'
import App from './App'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ConnectedRouter>
      </Provider>
    )
  }
}
