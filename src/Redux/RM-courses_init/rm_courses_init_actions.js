import {
  rm_courses_success,
  rm_courses_failure,
  rm_courses_show,
  rm_courses_hide
} from './rm_courses_init_types'
import { get_config } from '../../Components/Config'
import axios from 'axios'
export const rmCoursesSuccess = (data) => {
  return {
    type: rm_courses_success,
    payload: data
  }
}
export const rmCoursesFailure = () => {
  return {
    type: rm_courses_failure
  }
}
export const rmCoursesShow = () => {
  return {
    type: rm_courses_show
  }
}
export const rmCoursesHide = () => {
  return {
    type: rm_courses_hide
  }
}

export const fetchCourses = () => {
  let url = get_config('test_url') + get_config('classroom_method')
  const options = {
    method: 'POST',
    url: url,
    params: {}
  }

  return (dispatch) => {
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(rmCoursesSuccess(data))
      })
      .catch((error) => {
        dispatch(rmCoursesFailure(error.message))
      })
  }
}
