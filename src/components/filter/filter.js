import React from 'react'
import debounce from 'lodash.debounce'
import queryString from 'query-string'
import './filter.css'

const delay = 500

const Filter = props => {
  const { setSearchText, search } = props

  const debounceInput = debounce(setSearchText, delay)
  const handlerInput = ({ target: { value } }) => debounceInput(value)
  const onClickHandler = e => {
    e.preventDefault()
    const query = queryString.stringify({ query: search })
    props.history.push(`/?${query}`)
  }
  return (
    <div className="filters-container">
      <input
        id="search"
        autoComplete="off"
        type="text"
        placeholder="search keyword..."
        onChange={handlerInput}
      />
      <button
        id="search-button"
        value="Search 🔎"
        className={search ? 'search-button-visible' : ''}
        onClick={onClickHandler}
      >
        Search
      </button>
    </div>
  )
}

export default Filter
