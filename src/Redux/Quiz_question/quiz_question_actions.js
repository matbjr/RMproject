import { topic_path } from './quiz_question_types'

export const TopicPath = (data) => {
  return {
    type: topic_path,
    payload: data
  }
}
