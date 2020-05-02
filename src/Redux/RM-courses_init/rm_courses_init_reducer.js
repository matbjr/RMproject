import {
  rm_courses_success,
  rm_courses_failure,
  rm_courses_show,
  rm_courses_hide
} from './rm_courses_init_types'

const rm_courses_state = {
  data: [],
  loaded: false,
  display: true,
  error: ''
}
const rm_course_reducer = (state = rm_courses_state, action) => {
  switch (action.type) {
    case rm_courses_success:
      return {
        ...state,
        data: action.payload,
        loaded: true
      }
    case rm_courses_failure:
      return {
        ...state,
        error: action.payload
      }
    case rm_courses_show:
      return {
        ...state,
        display: true
      }
    case rm_courses_hide:
      return {
        ...state,
        display: false
      }
    default:
      return state
  }
}

export default rm_course_reducer
