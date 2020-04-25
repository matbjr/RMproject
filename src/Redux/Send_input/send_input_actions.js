import axios from 'axios'
import { send_input_request, send_input_success, send_input_failure,
    send_table_off, send_table_on } from "./send_input_types"
import { get_config, get_service_config } from '../../Components/Config'

export const sendInputRequest = () => {
    return{
        type: send_input_request
    }
}
export const sendTableOff = () => {
    return{
        type: send_table_off
    }
}
export const sendTableOn = () => {
    return{
        type: send_table_on
    }
}
export const sendInputSuccess = data => {
    return{
        type: send_input_success,
        payload: data
    }
}
export const sendInputFailure = error => {
    return{
        type: send_input_failure,
        payload: error
    }
}

export const fetchInput = data => {
    let url = get_config('service_url') + get_service_config(6, 'api_method')
    console.log(data)
    const options = {
        method: 'POST',
        url: url,
        params: {pretty:1, input: JSON.stringify(data)}
    }

    return (dispatch) => {
      dispatch(sendInputRequest())
      axios(options)
        .then(response => {
          const data = response.data
          dispatch(sendInputSuccess(data))
        })
        .catch(error => {
          dispatch(sendInputFailure(error.message))
        })
    }
}