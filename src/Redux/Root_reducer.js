import { combineReducers } from 'redux'
import sample_reducer from './Sample_test/sample_reducer'
import input_redcuer from './Get_input/input_reducer'
import send_input_reducer from './Send_input/send_input_reducer'
import google_reducer from './Google_login/google_reducer'

const root_reducer = combineReducers({
  sample_json: sample_reducer,
  input_json: input_redcuer,
  results_json: send_input_reducer,
  google_json: google_reducer
})

export default root_reducer
