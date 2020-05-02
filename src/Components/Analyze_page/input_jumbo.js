import React from 'react'
import SampleContainer from '../../Redux/Sample_test/sample_container'
import InputContainer from '../../Redux/Get_input/input_contianer'
import { Jumbotron } from 'react-bootstrap'

function Inputjumbo() {
  return (
    <div>
      <Jumbotron fluid>
        <h1>Calculate Exam Reliability!</h1>
        <p>
          Provide you with reliability indicators to help you determine your
          tests’ capabilities for assessing your students.
        </p>
        <SampleContainer />
        <InputContainer />
      </Jumbotron>
    </div>
  )
}

export default Inputjumbo
