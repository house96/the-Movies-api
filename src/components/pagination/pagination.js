import React from 'react'
import queryString from 'query-string'
import './pagination.css'

const LIMIT_PAGES = 999

const Pagination = props => {
  const { totalPages, currentPage, history } = props

  const onClickPagination = e => {
    let num = e.target.id
    const query = queryString.parse(props.location.search)
    const pageQuery = queryString.stringify({ ...query, page: num })

    history.push(`/?${pageQuery}`)
  }

  const calculationPagination = () => {
    if (!currentPage || totalPages < 2) return ''

    const endNumber = totalPages >= LIMIT_PAGES ? LIMIT_PAGES : totalPages
    let end = endNumber >= currentPage + 1 ? currentPage + 1 : currentPage
    let start = currentPage - 1 > 0 ? currentPage - 1 : 1

    const paginationElements = []

    for (; start <= end; start++) {
      paginationElements.push(
        <span
          onClick={onClickPagination}
          className={
            'pagination__item' +
            (currentPage === start ? ' pagination__item_active' : '')
          }
          id={start}
          key={start}
        >
          {start}
        </span>
      )
    }
    if (endNumber > currentPage + 2) {
      paginationElements.push(
        <span
          onClick={onClickPagination}
          className={
            'pagination__item dots' +
            (currentPage === totalPages ? ' pagination__item_active' : '')
          }
          id={endNumber}
          key={endNumber}
        >
          ... {endNumber}
        </span>
      )
    }
    return <div className="pagination">{paginationElements}</div>
  }
  return calculationPagination()
}

export default Pagination
