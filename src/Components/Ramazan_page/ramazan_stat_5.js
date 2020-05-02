import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Row, Col, Accordion } from 'react-bootstrap'

function RamazanStat5() {
  const data_loaded_5 = useSelector((state) => state.ramadan_agg_results.loaded_5)
  const stat_5 = useSelector((state) => state.ramadan_agg_results.stat_5)
  return (
    <div>
      {data_loaded_5 ? <h3>Quiz Statistics</h3> : null}
      {data_loaded_5
        ? stat_5.map((val) => (
            <Accordion>
              <Card>
                <Accordion.Toggle eventKey='0'>
                  {/* <Card.Header as='h5'>{val.quiz}</Card.Header> */}
                  <Row as={(Card.Header, 'h5')} className='justify-content-md-center'>
                    <Col>{val.quiz}</Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <Card.Title>
                      Amount Attempted: {val.count}
                      <br></br>
                    </Card.Title>
                    <Row>
                      <Col>
                        <Card.Text>
                          All 5 Correct: {val.all_correct}
                          <br></br>
                          {val.all_correct_perc}%
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          4 Correct: {val.four_correct}
                          <br></br>
                          {val.four_correct_perc}%
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          3 Correct: {val.three_correct}
                          <br></br>
                          {val.three_correct_perc}%
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          2 Correct: {val.two_correct}
                          <br></br>
                          {val.two_correct_perc}%
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          1 Correct: {val.one_correct}
                          <br></br>
                          {val.one_correct_perc}%
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          0 Correct: {val.zero_correct}
                          <br></br>
                          {val.zero_correct_perc}%
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))
        : null}
    </div>
  )
}

export default RamazanStat5
