import React from 'react'
import debounce from 'lodash.debounce'
import queryString from 'query-string'
import './header.css'

const delay = 500

const Header = props => {
  const { setSearchText, search } = props

  const debounceInput = debounce(setSearchText, delay)
  const handlerInput = ({ target: { value } }) => debounceInput(value)
  const onClickHandler = e => {
    e.preventDefault()
    const query = queryString.stringify({ query: search })
    props.history.push(`/?${query}`)
  }
  return (
    <header>
      <div className="filters-container">
        <input
          id="search"
          autoComplete="off"
          type="text"
          placeholder="Search keyword..."
          onChange={handlerInput}
        />
        <button
          id="search-button"
          defaultValue="Search"
          className={search ? 'search-button-visible' : ''}
          onClick={onClickHandler}
        >
          Search
        </button>
      </div>
    </header>
  )
}

export default Header
