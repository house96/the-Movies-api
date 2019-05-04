import { Record } from 'immutable'

import { MOVIE, GET_MOVIE } from '../constants/movie'
import { loading, SUCCESS } from '../constants/common'
import { reduceSuccessFail } from '../utils/helpers'

const ReducerState = Record({
  ...loading,
  currentMovie: null,
})

const defaultState = new ReducerState()

export default function(state = defaultState, action) {
  const { type, response } = action

  return reduceSuccessFail({
    reducer: MOVIE,
    state,
    action,
    onSuccess: state => {
      switch (type) {
        case GET_MOVIE + SUCCESS:
          return state.set('currentMovie', response)
        default:
          return state
      }
    },
  })
}
