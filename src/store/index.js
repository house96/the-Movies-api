import { createStore, applyMiddleware, compose } from 'redux'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from '../reducers'
import { getMovies, searchMovies, getMovieInfo } from '../service/moviesApi'
/**
 * @type {Object}
 * @property __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 */

export const history = createHashHistory()

const middlewares = [
  thunk.withExtraArgument({
    api: getMovies,
    searchApi: searchMovies,
    articleApi: getMovieInfo,
  }),
  routerMiddleware(history),
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
