import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">The Movie App</Link>
      </h1>
    </header>
  )
}

export default Header
