import { Record } from 'immutable'

import {
  MOVIES,
  POPULAR_MOVIES,
  SET_SEARCH_TEXT,
  SEARCH_MOVIES,
} from '../constants/movies'
import { loading, SUCCESS } from '../constants/common'
import { reduceSuccessFail } from '../utils/helpers'

const ReducerState = Record({
  ...loading,
  moviesList: null,
  totalPages: null,
  currentPage: null,
  search: null,
})

const defaultState = new ReducerState()

export default function(state = defaultState, action) {
  const { type, response, payload } = action

  switch (type) {
    case SET_SEARCH_TEXT:
      return state.set('search', payload)

    default:
      return reduceSuccessFail({
        reducer: MOVIES,
        state,
        action,
        onSuccess: state => {
          switch (type) {
            case POPULAR_MOVIES + SUCCESS:
            case SEARCH_MOVIES + SUCCESS:
              return state
                .set('moviesList', response.results)
                .set('totalPages', response.total_pages)
                .set('currentPage', response.page)
            default:
              return state
          }
        },
      })
  }
}
