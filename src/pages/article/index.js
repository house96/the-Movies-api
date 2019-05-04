import { connect } from 'react-redux'
import { getMovie } from '../../actions/movie'
import Article from './article'

const mapStateToProps = ({ movie }) => {
  const { currentMovie, loading, loaded } = movie
  return {
    currentMovie,
    loading: loading || !loaded,
  }
}

export default connect(
  mapStateToProps,
  { getMovie }
)(Article)
