import React from 'react'
import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import { Button, ListGroup, Row, Col, Form } from 'react-bootstrap'
import { Radio, FormControlLabel, RadioGroup } from '@material-ui/core'

function MultipleChoiceForm() {
  const { watch, control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name: 'item_choices' })
  return (
    <>
      {watch('item_type') === 'Multiple Choice' ? (
        <>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col md='2' />
                <Col md='6'>Item Choices</Col>
                <Col md='2'>Selct All Correct Answers</Col>
                <Col md='2'>
                  <Button
                    type='button'
                    onClick={() => {
                      append({ choice: '', correct: 0 })
                    }}>
                    <i className='fas fa-plus'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            {fields.map((item, index) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md='2'>Choice {index + 1}</Col>
                  <Col md='6'>
                    <Controller
                      as={<Form.Control as='textarea' rows='2' />}
                      autoComplete='off'
                      name={`item_choices[${index}].choice`}
                      control={control}
                      defaultValue={item.choice}
                    />
                  </Col>
                  <Col md='2'>
                    <Controller
                      as={
                        <RadioGroup>
                          <FormControlLabel value='1' control={<Radio />} label='Correct' />
                        </RadioGroup>
                      }
                      name={`item_choices[${index}].correct`}
                      control={control}
                      rules={{ required: true }}
                    />
                  </Col>
                  <Col md='2'>
                    <Button type='button' onClick={() => remove(index)}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : null}
    </>
  )
}

export default MultipleChoiceForm
