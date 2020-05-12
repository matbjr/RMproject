import React, { useState } from 'react'
import { useForm, FormContext } from 'react-hook-form'
import HookForm from './hook_form'
import QuestionModal from './question_modal'
import { Row, Col, Button, Form } from 'react-bootstrap'

function QuizQuestionPage() {
  const [modalShow, setModalShow] = useState(false)
  const methods = useForm({
    defaultValues: {
      id: '',
      item_type: '',
      grade_min: 1,
      grade_max: 12,
      item_text: '',
      subject: '',
      item_choices: [
        { choice: '', correct: 0 },
        { choice: '', correct: 0 },
        { choice: '', correct: 0 },
        { choice: '', correct: 0 }
      ]
    }
  })
  const { handleSubmit, watch } = methods
  const onSubmit = (data) => {
    setModalShow(true)
    console.log(data)
  }
  return (
    <>
      <FormContext {...methods}>
        <Row>
          <Col md='2' />
          <Col md='8'>
            <HookForm />
            <br></br>
          </Col>
          <Col md='2' />
        </Row>
        <QuestionModal show={modalShow} onHide={() => setModalShow(false)} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {watch('item_choices[0].choice') !== '' ? <Button type='submit'>See Item Preview</Button> : null}
        </Form>
      </FormContext>
    </>
  )
}

export default QuizQuestionPage
