import { topic_path, item_request, item_success, item_failure } from './quiz_question_types'
import { get_config } from '../../Components/Config'
import axios from 'axios'

export const TopicPath = (data) => {
  return {
    type: topic_path,
    payload: data
  }
}
export const ItemRequest = (data) => {
  return {
    type: item_request,
    payload: data
  }
}
export const ItemSuccess = (data) => {
  return {
    type: item_success,
    payload: data
  }
}
export const ItemFailure = (error) => {
  return {
    type: item_failure,
    payload: error
  }
}

export const fetchItem = (data) => {
  let url = get_config('service2_url') + 'item/'
  console.log(url)
  const options = {
    method: 'POST',
    url: url,
    params: { input: data }
  }

  return (dispatch) => {
    console.log(data)
    dispatch(ItemRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(ItemSuccess(data))
      })
      .catch((error) => {
        dispatch(ItemFailure(error.message))
      })
  }
}
