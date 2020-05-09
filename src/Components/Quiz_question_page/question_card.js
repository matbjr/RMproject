import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup, Row, Col, Modal, Button } from 'react-bootstrap'
import ListItem from './Reuse_components/list_item'
import { useFormContext } from 'react-hook-form'

function QuestionModal(props) {
  const topic_path = useSelector((state) => state.quiz_question.topic_path)
  const { getValues } = useFormContext()
  const from_data = getValues({ nest: true })

  return (
    <>
      <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter' className='text-center'>
            {from_data.item_text}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md='6' className='text-left'>
              <ListItem text='Item Type: ' item={from_data.item_type} color='primary' />
              {props.show
                ? from_data.item_choices.map((val, index) => (
                    <>
                      <ListGroup.Item>
                        <Row>
                          <Col>{`Choice ${index + 1} `}</Col>
                          <Col>{val.choice}</Col>
                          <Col>{val.correct !== 0 ? <i className='fas fa-check'></i> : null} </Col>
                        </Row>
                      </ListGroup.Item>
                    </>
                  ))
                : null}
            </Col>
            <Col md='6'>
              <ListGroup>
                <ListItem text='Item Catagory' color='success' />
                <ListItem
                  text='Topic Tree: '
                  item={topic_path.map((va) =>
                    va._depth === 0 ? (
                      <>
                        <ListItem text={va.label} />
                      </>
                    ) : null
                  )}
                />
                <ListItem
                  text='Topic Branch(s): '
                  item={topic_path.map((va) =>
                    va._depth !== 0 ? (
                      <>
                        <ListItem text={va.label} />
                      </>
                    ) : null
                  )}
                />

                <ListItem text='Item Audience' color='info' />
                <ListItem text='Minimun Grade: ' item={from_data.grade_min} />
                <ListItem text='Maximum Grade: ' item={from_data.grade_max} />
                {/* <ListItem text='Item Weight: ' item={from_data.item_weight} /> */}
              </ListGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default QuestionModal
