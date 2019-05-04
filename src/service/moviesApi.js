import { get, getMoviesUrl, getSearchUrl } from '../utils/helpers'

const getMovies = page => {
  return get(`${getMoviesUrl()}&&${page}`)
}
const searchMovies = query => get(`${getSearchUrl()}${query}`)
const getMovieInfo = id => get(`/movie/${id}?`)

export { getMovies, searchMovies, getMovieInfo }
