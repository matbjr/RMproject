import {
  stat4_results_request,
  stat4_results_success,
  stat4_results_failure,
  stat5_results_success,
  stat5_results_failure,
  stat5_results_request,
  stat6_results_request,
  stat6_results_success,
  stat6_results_failure
} from './aggregated_types'

const aggregated_results_state = {
  loaded_4: false,
  loaded_5: false,
  loaded_6: false,
  loading_4: false,
  loading_5: false,
  loading_6: false,
  stat_4: [],
  stat_5: [],
  stat_6: [],
  error_4: '',
  error_5: '',
  error_6: ''
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
    case stat6_results_request:
      return {
        ...state,
        loading_6: true
      }
    case stat6_results_success:
      return {
        ...state,
        loaded_6: true,
        loading_6: false,
        stat_6: action.payload,
        error_6: ''
      }
    case stat6_results_failure:
      return {
        ...state,
        stat_6: [],
        error_6: action.payload
      }
    default:
      return state
  }
}

export default ramadan_aggregated_results_reducer
