import PropTypes from 'prop-types'

// Суфікси
export const SUCCESS = '_SUCCESS'
export const START = '_START'
export const FAIL = '_FAIL'

export const loading = {
  loading: false,
  loaded: false,
  error: null,
}

export const loadingPropTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.string,
}
