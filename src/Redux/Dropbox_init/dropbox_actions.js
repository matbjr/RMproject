import { file_success, file_failure } from './dropbox_types'
export const FileSuccess = () => {
  return {
    type: file_success
  }
}
export const FileFailure = (error) => {
  return {
    type: file_failure,
    payload: error
  }
}
