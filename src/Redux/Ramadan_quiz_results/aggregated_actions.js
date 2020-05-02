import axios from 'axios'
import { get_config } from '../../Components/Config'
import { stat4_results_request, stat4_results_success, stat4_results_failure, stat5_results_success, stat5_results_failure, stat5_results_request } from './aggregated_types'

export const stat4ResultsRequest = () => {
  return {
    type: stat4_results_request
  }
}
export const stat4ResultsSuccess = (data) => {
  return {
    type: stat4_results_success,
    payload: data
  }
}
export const stat4ResultsFailure = (error) => {
  return {
    type: stat4_results_failure,
    payload: error
  }
}
export const stat5ResultsRequest = () => {
  return {
    type: stat5_results_request
  }
}
export const stat5ResultsSuccess = (data) => {
  return {
    type: stat5_results_success,
    payload: data
  }
}
export const stat5ResultsFailure = (error) => {
  return {
    type: stat5_results_failure,
    payload: error
  }
}

export const fetchRamadanResultsStat4 = () => {
  let url = get_config('service2_url') + get_config('quiz_method')
  const options = {
    method: 'POST',
    url: url,
    params: { stat: 4 }
  }

  return (dispatch) => {
    dispatch(stat4ResultsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(stat4ResultsSuccess(data))
      })
      .catch((error) => {
        dispatch(stat4ResultsFailure(error.message))
      })
  }
}

export const fetchRamadanResultsStat5 = () => {
  let url = get_config('service2_url') + get_config('quiz_method')
  const options = {
    method: 'POST',
    url: url,
    params: { stat: 5 }
  }

  return (dispatch) => {
    dispatch(stat5ResultsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(stat5ResultsSuccess(data))
      })
      .catch((error) => {
        dispatch(stat5ResultsFailure(error.message))
      })
  }
}
