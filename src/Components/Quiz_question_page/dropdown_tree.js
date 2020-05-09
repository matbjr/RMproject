import React from 'react'
import { useDispatch } from 'react-redux'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import { question_details } from './question_details'
import { TopicPath } from '../../Redux/Quiz_question/quiz_question_actions'

function DropdownTree() {
  const dispatch = useDispatch()
  let question_json = question_details.subject_list
  const assignObjectPaths = (obj, stack) => {
    Object.keys(obj).forEach((k) => {
      const node = obj[k]
      if (typeof node === 'object') {
        node.path = stack ? `${stack}.${k}` : k
        assignObjectPaths(node, node.path)
      }
    })
  }
  assignObjectPaths(question_json)
  const onChange = (currentNode, selectedNodes) => {
    dispatch(TopicPath(selectedNodes))
  }
  return (
    <>
      <DropdownTreeSelect data={question_json} className='dropdown' onChange={onChange} />
    </>
  )
}

export default DropdownTree
