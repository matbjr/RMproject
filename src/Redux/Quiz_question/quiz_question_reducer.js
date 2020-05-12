import { topic_path, item_request, item_success, item_failure } from './quiz_question_types'
const quiz_question_state = {
  topic_path: [],
  item_loading: false,
  item_sent: false,
  item_response: [],
  item_error: ''
}

const quiz_question_reducer = (state = quiz_question_state, action) => {
  switch (action.type) {
    case topic_path:
      return {
        ...state,
        topic_path: action.payload
      }
    case item_request:
      return {
        ...state,
        item_loading: true
      }
    case item_success:
      return {
        ...state,
        item_loading: false,
        item_sent: true,
        item_response: action.payload
      }
    case item_failure:
      return {
        ...state,
        item_error: action.payload
      }
    default:
      return state
  }
}

export default quiz_question_reducer
