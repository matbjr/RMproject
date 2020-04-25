import { login_success, login_failure, logout } from './google_types'

const google_state = {
  data: [],
  isLogin: false,
  error: ''
}

const google_reducer = (state = google_state, action) => {
  switch (action.type) {
    case login_success:
      return {
        ...state,
        data: action.payload,
        isLogin: true
      }
    case login_failure:
      return {
        ...state,
        error: action.payload
      }
    case logout:
      return {
        ...state,
        isLogin: false
      }
    default:
      return state
  }
}

export default google_reducer
