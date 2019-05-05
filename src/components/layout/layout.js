import React from 'react'

import Header from '../header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className="dark-layer">
      <Header />
      <main className="container">{children}</main>
    </div>
  )
}

export default Layout
