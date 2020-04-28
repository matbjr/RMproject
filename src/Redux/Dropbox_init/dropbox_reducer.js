import { file_success, file_failure } from './dropbox_types'

const dropbox_state = {
  init: false,
  error: ''
}

const dropbox_reducer = (state = dropbox_state, action) => {
  switch (action.type) {
    case file_success:
      return {
        ...state,
        init: true
      }
    case file_failure:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default dropbox_reducer
