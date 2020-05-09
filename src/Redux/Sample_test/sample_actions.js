import axios from 'axios'
import { Fetch_sample_request, Fetch_sample_success, Fetch_sample_failure, sample_table_off } from './sample_types'
import { get_config } from '../../Components/Config'
import { inputTableOff } from '../Get_input/input_actions'

export const fetchSampleRequest = () => {
  return {
    type: Fetch_sample_request
  }
}
export const sampleTableOff = () => {
  return {
    type: sample_table_off
  }
}
export const fetchSampleSuccess = (data) => {
  return {
    type: Fetch_sample_success,
    payload: data
  }
}
export const fetchSampleFailure = (error) => {
  return {
    type: Fetch_sample_failure,
    payload: error
  }
}

export const fetchSample = () => {
  let url = get_config('service2_url') + get_config('sample_method')
  return (dispatch) => {
    dispatch(fetchSampleRequest())
    dispatch(inputTableOff())
    axios
      .post(url)
      .then((response) => {
        const data = response.data
        dispatch(fetchSampleSuccess(data))
      })
      .catch((error) => {
        dispatch(fetchSampleFailure(error.message))
      })
  }
}
