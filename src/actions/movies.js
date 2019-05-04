import { actionSuccessFail } from '../utils/helpers'
import * as C from '../constants/movies'

export const getPopularMovies = query => (dispatch, _, { api }) =>
  actionSuccessFail({
    dispatch,
    reducer: C.MOVIES,
    type: C.POPULAR_MOVIES,
    promise: api(query),
    payload: {},
  })
export const getSearchMovies = query => (dispatch, _, { searchApi }) =>
  actionSuccessFail({
    dispatch,
    reducer: C.MOVIES,
    type: C.SEARCH_MOVIES,
    promise: searchApi(query),
    payload: {},
  })

export const setSearchText = text => ({
  type: C.SET_SEARCH_TEXT,
  payload: text,
})
