import React from 'react'
//import { useFormik } from 'formik'
import { Form, Button } from 'react-bootstrap'

function RamazanForm() {
  //   const formik = useFormik({
  //     initialValues: {
  //       name: ''
  //     }
  //   })
  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>
            <h4>Indivisual Reports</h4>
            <h4> Enter Name</h4>
          </Form.Label>
          <Form.Text className='text-muted'>
            Please use the same name used for the quiz
          </Form.Text>
          <Form.Control type='email' placeholder='name' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Get Results
        </Button>
      </Form>
    </div>
  )
}

export default RamazanForm
