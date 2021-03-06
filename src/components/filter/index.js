import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setSearchText, getSearchMovies } from '../../actions/movies'
import Filter from './filter'

const mapStateToProps = ({ movies: { search } }) => ({
  search,
})

export default connect(
  mapStateToProps,
  { setSearchText, getSearchMovies }
)(withRouter(Filter))
