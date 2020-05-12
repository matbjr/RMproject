import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup, Row, Col, Modal, Button } from 'react-bootstrap'
import ListItem from './Reuse_components/list_item'
import { useFormContext } from 'react-hook-form'
import { fetchItem } from '../../Redux/Quiz_question/quiz_question_actions'

function QuestionModal(props) {
  const dispatch = useDispatch()
  const { getValues } = useFormContext()
  const topic_path = useSelector((state) => state.quiz_question.topic_path)
  const from_data = getValues({ nest: true })
  let paths = topic_path.map((val) => val.path)
  const fixChoices = () => {
    return props.show ? from_data.item_choices.map((val) => (val.correct === false ? (val.correct = 0) : '1')) : null
  }
  fixChoices()
  let item_json = Object.assign(from_data, { paths })
  const handleSubmit = () => {
    props.onHide()
    dispatch(fetchItem(item_json))
  }
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
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col sm>{`Choice ${index + 1} `}</Col>
                        <Col sm>{val.choice}</Col>
                        <Col sm>{val.correct === '1' ? <i className='fas fa-check'></i> : null} </Col>
                      </Row>
                    </ListGroup.Item>
                  ))
                : null}
            </Col>
            <Col md='6'>
              <ListGroup>
                <ListItem text='Item Catagory' color='success' />
                <ListItem
                  text='Subject: '
                  item={from_data.subject !== '' ? <ListItem text={from_data.subject} /> : null}
                />
                <ListItem
                  text='Topics: '
                  item={topic_path.map((va, index) => (
                    <ListItem key={index} text={va.label} />
                  ))}
                />
                <ListItem text='Item Audience' color='info' />
                <ListItem text='Minimun Grade: ' item={from_data.grade_min} />
                <ListItem text='Maximum Grade: ' item={from_data.grade_max} />
              </ListGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default QuestionModal
