import { topic_path } from './quiz_question_types'
const quiz_question_state = {
  topic_path: []
}

const quiz_question_reducer = (state = quiz_question_state, action) => {
  switch (action.type) {
    case topic_path:
      return {
        ...state,
        topic_path: action.payload
      }
    default:
      return state
  }
}

export default quiz_question_reducer
