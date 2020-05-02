import axios from 'axios'
import { get_config } from '../../Components/Config'
import { indivisual_results_request, indivisual_results_success, indivisual_results_failure, data_loaded_off } from './indivisual_types'

export const indivisualResultsRequest = () => {
  return {
    type: indivisual_results_request
  }
}
export const dataLoadedOff = () => {
  return {
    type: data_loaded_off
  }
}
export const indivisualResultsSuccess = (data) => {
  return {
    type: indivisual_results_success,
    payload: data
  }
}
export const indivisualResultsFailure = (error) => {
  return {
    type: indivisual_results_failure,
    payload: error
  }
}

export const fetchRamadanResultsIndivisual = (data) => {
  let url = get_config('service2_url') + get_config('quiz_method')
  console.log(data)
  const options = {
    method: 'POST',
    url: url,
    params: data
  }

  return (dispatch) => {
    dispatch(indivisualResultsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(indivisualResultsSuccess(data))
      })
      .catch((error) => {
        dispatch(indivisualResultsFailure(error.message))
      })
  }
}
