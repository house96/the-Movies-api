import { connect } from 'react-redux'
import Pagination from './pagination'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ movies }) => {
  const { currentPage, totalPages, loaded } = movies
  return {
    totalPages,
    currentPage,
    loaded,
  }
}

export default connect(
  mapStateToProps,
  null
)(withRouter(Pagination))
