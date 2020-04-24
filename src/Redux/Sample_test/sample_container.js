import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSample } from './sample_actions'

import '../../Components/Components.css'

function SampleContainer() {
  const dispatch = useDispatch()

  return (
    <div>
      <p>
        Sample Exam{' '}
        <button
          type='button'
          className='link-button'
          onClick={() => dispatch(fetchSample())}>
          Use data
        </button>
      </p>
    </div>
  )
}

export default SampleContainer
