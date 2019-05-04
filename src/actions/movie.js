import { actionSuccessFail } from '../utils/helpers'
import * as C from '../constants/movie'

export const getMovie = id => (dispatch, _, { articleApi }) =>
  actionSuccessFail({
    dispatch,
    reducer: C.MOVIE,
    type: C.GET_MOVIE,
    promise: articleApi(id),
    payload: {},
  })
