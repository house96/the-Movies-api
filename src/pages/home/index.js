import { connect } from 'react-redux'
import { getPopularMovies, getSearchMovies } from '../../actions/movies'
import Home from './home'

const mapStateToProps = ({ movies }) => {
  const { moviesList, currentPage, totalPages, loading } = movies
  return {
    movies: moviesList,
    totalPages,
    currentPage,
    loading,
  }
}
const actions = { getPopularMovies, getSearchMovies }

export default connect(
  mapStateToProps,
  actions
)(Home)
