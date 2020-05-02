import { combineReducers } from 'redux'
import sample_reducer from './Sample_test/sample_reducer'
import input_redcuer from './Get_input/input_reducer'
import send_input_reducer from './Send_input/send_input_reducer'
import google_reducer from './Google_login/google_reducer'
import dropbox_reducer from './Dropbox_init/dropbox_reducer'
import rm_course_reducer from './RM-courses_init/rm_courses_init_reducer'

const root_reducer = combineReducers({
  sample_json: sample_reducer,
  input_json: input_redcuer,
  results_json: send_input_reducer,
  google_json: google_reducer,
  rm_courses_json: rm_course_reducer,
  dropbox: dropbox_reducer
})

export default root_reducer
