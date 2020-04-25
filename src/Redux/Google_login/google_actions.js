import { login_success, login_failure, logout,
    send_login_request } from './google_types'
import {get_config} from "../../Components/Config";
import axios from "axios/index";

export const sendLoginRequest = () => {
    return{
        type: send_login_request
    }
}

export const loginSuccess = (data) => {
  return {
    type: login_success,
    payload: data
  }
}
export const loginFailure = (error) => {
  return {
    type: login_failure,
    payload: error
  }
}
export const logOut = () => {
  return {
    type: logout
  }
}

export const fetchUser = data => {
    let url = get_config('test_url') + get_config('login_method')
    console.log(data)
    const options = {
        method: 'POST',
        url: url,
        params: {id_token: data.tokenId, access_token: data.accessToken}
    }

    return (dispatch) => {
      dispatch(sendLoginRequest())
      axios(options)
        .then(response => {
          const data = response.data
            console.log(data)
          //dispatch(sendLoginSuccess(data))
        })
        .catch(error => {
          //dispatch(sendInputFailure(error.message))
        })
    }
}