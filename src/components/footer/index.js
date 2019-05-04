import React from 'react'
import Pagination from '../../components/pagination'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="api-footer">
        <a
          href="https://www.themoviedb.org/documentation/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          App was developed using the The Movie db API{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </a>
      </div>
      <Pagination />
    </div>
  )
}

export default Footer
