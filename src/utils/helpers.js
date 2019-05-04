import axios from 'axios'
import { FAIL, START, SUCCESS } from '../constants/common'

export const getMoviesUrl = () => process.env.REACT_APP_POPULAR_MOVIES
export const getSearchUrl = () => process.env.REACT_APP_SEARCH_MOVIE

export async function get(apiNamespace) {
  const { REACT_APP_BASE_URL, REACT_APP_KEY } = process.env
  const urlApi = `${REACT_APP_BASE_URL}${apiNamespace}&&api_key=${REACT_APP_KEY}`
  try {
    const { data } = await axios.get(urlApi)
    return data
  } catch (err) {
    console.info(err)
    return new Error({ success: false, message: err })
  }
}

export function reduceSuccessFail({
  reducer,
  state,
  action,
  onSuccess,
  isObservable = true,
}) {
  const { stage, error } = action
  if (reducer === action.reducer && isObservable) {
    switch (stage) {
      case START:
        state = state.merge({ loading: true, error: null })
        break
      case FAIL:
        state = state.merge({ loading: false, error })
        break
      case SUCCESS:
        state = state.merge({ loading: false, loaded: true, error: null })
        break
      default:
    }
  }

  switch (stage) {
    case SUCCESS:
      return onSuccess(state)
    default:
      return state
  }
}

/**
 * Об'єкт параметрів для функції actionSuccessFail
 * @typedef {Object} ActionParams
 * @property {function} dispatch - функція dispatch, яку передає redux-thunk
 * @property {string} reducer - назва редюсера, для якого призначений цей екшн
 * @property {string} type - тип екшина
 * @property {Promise} promise - проміс (або асинхронна функція), який потрібно виконати
 * @property {Object} [payload] - пейлоад екшина, буде доступний для редюсера
 */

export const actionSuccessFail = ({
  dispatch,
  reducer,
  type,
  promise,
  payload,
}) => {
  dispatch({ reducer, type: type + START, stage: START })
  return promise
    .then(response => {
      if (response && response.success === false) {
        return dispatch({
          reducer,
          type: type + FAIL,
          stage: FAIL,
          error: (response.errors || []).join('\r\n'),
        })
      } else {
        return dispatch({
          reducer,
          type: type + SUCCESS,
          stage: SUCCESS,
          response,
          payload,
        })
      }
    })
    .catch(error => {
      console.error(error)
      dispatch({
        reducer,
        type: type + FAIL,
        stage: FAIL,
        error: error.toString(),
      })
    })
}
