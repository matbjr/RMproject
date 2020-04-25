import { login_success, login_failure, logout } from './google_types'

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
