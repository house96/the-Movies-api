import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Home from '../pages/home'
import Article from '../pages/article'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
