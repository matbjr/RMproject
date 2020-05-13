import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MyInput from './Reuse_components/my_input'
import MultipleChoiceForm from './multiple_choice_form'
import { useFormContext } from 'react-hook-form'
import { question_details } from './question_details'
import DropdownTree from './dropdown_tree'

function HookForm() {
  const { watch } = useFormContext()
  let subjects = question_details.subject_list.map((val) => val.label)
  let item_types = ['Multiple Choice']
  console.log(watch('accessibility'))
  let acc_label = watch('accessibility') === false ? 'Private' : 'Public'
  let grades = []
  for (let i = 1; i <= 12; i++) {
    grades.push(String(i))
  }
  return (
    <>
      <h2>Enter Item data</h2>
      <br></br>
      <Row>
        <Col md='12'>
          <MyInput label='Item Text' name='item_text' input_type='textarea' id='Item' />
        </Col>
        <Col>
          <MyInput label='Subject' name='subject' input_type='select' options={subjects} id='subject' />
        </Col>
        <Col>
          <h4 style={{ textAlign: 'initial' }}>Item Topics</h4>
          <DropdownTree />
        </Col>

        <Col>
          <MyInput label='Item Type' name='item_type' input_type='select' options={item_types} id='Item_type' />
        </Col>
        <Col>
          <MyInput label='Grade-Min' name='grade_min' input_type='select' options={grades} id='grade_min' />
        </Col>
        <Col>
          <MyInput label='Grade-Max' name='grade_max' input_type='select' options={grades} id='grade_max' />
        </Col>
        <Col>
          <MyInput label={acc_label} name='accessibility' input_type='switch' id='accessibility' />
        </Col>
      </Row>
      <MultipleChoiceForm />
    </>
  )
}
// {/* <MyInput label='Item Weight' name='item_weight' input_type='range' max_range={10} />
//         <p>{watch('item_weight')}</p> */}
export default HookForm
