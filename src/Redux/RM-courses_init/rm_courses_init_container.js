import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCourses } from './rm_courses_init_actions'

function RmInitContainer() {
  const dispatch = useDispatch()
  dispatch(fetchCourses())
  return <div></div>
}

export default RmInitContainer
