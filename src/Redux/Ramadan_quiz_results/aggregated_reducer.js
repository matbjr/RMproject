import {
  stat4_results_request,
  stat4_results_success,
  stat4_results_failure,
  stat5_results_success,
  stat5_results_failure,
  stat5_results_request
} from './aggregated_types'

const aggregated_results_state = {
  loaded_4: false,
  loaded_5: false,
  loading_4: false,
  loading_5: false,
  stat_4: [],
  stat_5: [],
  error_4: '',
  error_5: ''
}

const ramadan_aggregated_results_reducer = (state = aggregated_results_state, action) => {
  switch (action.type) {
    case stat4_results_request:
      return {
        ...state,
        loading_4: true
      }
    case stat4_results_success:
      return {
        ...state,
        loaded_4: true,
        loading_4: false,
        stat_4: action.payload,
        error_4: ''
      }
    case stat4_results_failure:
      return {
        ...state,
        stat_4: [],
        error_4: action.payload
      }
    case stat5_results_request:
      return {
        ...state,
        loading_5: true
      }
    case stat5_results_success:
      return {
        ...state,
        loaded_5: true,
        loading_5: false,
        stat_5: action.payload,
        error_5: ''
      }
    case stat5_results_failure:
      return {
        ...state,
        stat_5: [],
        error_5: action.payload
      }
    default:
      return state
  }
}

export default ramadan_aggregated_results_reducer
