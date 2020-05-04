import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Accordion, Card, Row, Col, Table } from 'react-bootstrap'

function IndividualTopicCard() {
  const [expanded, setexpanded] = useState(false)
  const total_scores = useSelector(
    (state) => state.ramadan_ind_results.ind_quizzes.total_scores
  )
  //console.log(total_scores)
  let topics = Object.keys(total_scores['Topic Max Scores'])
  //console.log('IndividualTopicCard -> topics', topics)
  let topics_max = Object.values(total_scores['Topic Max Scores'])
  //console.log('IndividualTopicCard -> topics', topics_max)
  let topics_score = Object.values(total_scores['Topic Scores'])
  //console.log('IndividualTopicCard -> topics', topics_score)
  return (
    <div>
      <Accordion>
        <Card>
          <Accordion.Toggle
            className='panel-heading'
            eventKey='0'
            onClick={() =>
              setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))
            }>
            <Row as={(Card.Header, 'h2')}>
              <Col />
              <Col>Topic Scores</Col>
              <Col>
                {!expanded ? (
                  <i className='fas fa-chevron-down'></i>
                ) : expanded ? (
                  <i className='fas fa-chevron-up'></i>
                ) : null}
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Scores</th>
                  </tr>
                </thead>
                <tbody>
                  {topics.map((val, index) => (
                    <tr key={index}>
                      <td>{val}</td>
                      <td>
                        {topics_score[index]}/{topics_max[index]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default IndividualTopicCard
