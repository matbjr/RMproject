import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import MyInput from './Reuse_components/my_input'
import MultipleChoiceForm from './multiple_choice_form'
import '../Components.css'

function HookForm() {
  let grades = []
  for (let i = 1; i <= 12; i++) {
    grades.push(String(i))
  }
  return (
    <>
      <h2>Enter Item data</h2>
      <br></br>
      <Form>
        <Row>
          <Col md='12'>
            <MyInput label='Item Text' name='item_text' input_type='textarea' id='Item' />
          </Col>
          <Col md='6'>
            <MyInput
              label='Item Type'
              name='item_type'
              input_type='select'
              options={['Multiple Choice']}
              id='Item_type'
            />
          </Col>
          <Col md='6'>
            <Row>
              <Col md='6'>
                <MyInput label='Grade-Min' name='grade_min' input_type='select' options={grades} id='grade_min' />
              </Col>
              <Col md='6'>
                <MyInput label='Grade-Max' name='grade_max' input_type='select' options={grades} id='grade_max' />
              </Col>
            </Row>
          </Col>
          <Col>
            <MultipleChoiceForm />
          </Col>
        </Row>
        {/* <MyInput label='Item Weight' name='item_weight' input_type='range' max_range={10} />
        <p>{watch('item_weight')}</p> */}
      </Form>
    </>
  )
}

export default HookForm
