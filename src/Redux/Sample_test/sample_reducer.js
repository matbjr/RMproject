import {
  Fetch_sample_request,
  Fetch_sample_success,
  Fetch_sample_failure,
  sample_table_off
} from './sample_types'

const sample_state = {
  loading: false,
  table: false,
  data: [],
  error: ''
}

const sample_reducer = (state = sample_state, action) => {
  switch (action.type) {
    case Fetch_sample_request:
      return {
        ...state,
        loading: true
      }
    case sample_table_off:
      return {
        ...state,
        table: false
      }
    case Fetch_sample_success:
      return {
        ...state,
        loading: false,
        table: true,
        data: action.payload,
        error: ''
      }
    case Fetch_sample_failure:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default sample_reducer
