import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Row, Col, Accordion } from 'react-bootstrap'
import Loader from 'react-loader-spinner'

function RamadanResultsCard() {
  const data_loaded = useSelector((state) => state.ramadan_ind_results.loaded)
  const data_loading = useSelector((state) => state.ramadan_ind_results.loading)
  const quizzes = useSelector((state) => state.ramadan_ind_results.ind_quizzes.quizzes)
  const total_scores = useSelector((state) => state.ramadan_ind_results.ind_quizzes.total_scores)

  console.log(quizzes)
  console.log(total_scores)

  return (
    <div>
      {data_loaded ? (
        <Card>
          <Card.Header as='h3'>Your Results</Card.Header>
          <Card.Body>
            <Card.Title>{quizzes[0].name}</Card.Title>
            <Row>
              <Col style={{ textAlign: 'left' }} xs='6'>
                Age: {quizzes[0].age}
                <br></br>
                City: {quizzes[0].city}
                <br></br>
                State: {quizzes[0].state}
                <br></br>
                School: {quizzes[0].school}
              </Col>
              <Col style={{ textAlign: 'right' }} className='' xs='6'>
                Quizzes: {total_scores['No. of Quizzes']}
                <br></br>
                Combined Scores: {total_scores['Combined score']}/{total_scores['No. of Quizzes'] * 5}
                <br></br>
                Combined score Percentage: {total_scores['Combined score Percentage']}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : null}
      {data_loading ? <Loader type='Puff' color='#00BFFF' height={100} width={100} /> : null}
      {data_loaded && total_scores['No. of Quizzes'] === 0 ? (
        <div>
          <br></br>
          <h4>No Quizes are found</h4>
        </div>
      ) : null}
      {/* {data_loaded && total_scores['No. of Quizzes'] >= 1
        ? quizzes.map((val, index) => (
            <div key={index}>
              <Card>
                <Card.Header as='h5'>
                  <div className='h3'>{val.description}</div>
                  <div>Marks {val.marks}</div>
                </Card.Header>
                <Card.Body>
                  {val.responses.map((va, index) => (
                    <div key={index} className='ramadan-card-text'>
                      <div>
                        {
                          <div style={{ fontWeight: 'bold' }}>
                            {va.question}
                          </div>
                        }
                        {
                          <div style={{ color: 'green' }}>
                            <i className='fas fa-check'></i>
                            {va.correct}
                          </div>
                        }
                        {va.point === 0 ? (
                          <div style={{ color: 'red' }}>
                            <i className='fas fa-times'></i>
                            Your answer: {va.your_answer}
                          </div>
                        ) : null}
                      </div>
                      <br></br>
                    </div>
                  ))}
                </Card.Body>
              </Card>
              <br></br>
            </div>
          ))
        : null} */}
      {data_loaded && total_scores['No. of Quizzes'] >= 1
        ? quizzes.map((val, index) => (
            <div key={index}>
              <Accordion>
                <Card>
                  <Accordion.Toggle eventKey='0'>
                    <Row as={(Card.Header, 'h5')}>
                      <Col xs='2'>{val.created_at.substring(0, 10)}</Col>
                      <Col xs='8'>{val.description} </Col>
                      <Col xs='2'>{val.marks}</Col>
                    </Row>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      {val.responses.map((va, index) => (
                        <div key={index} className='ramadan-card-text'>
                          <div>
                            {<div style={{ fontWeight: 'bold' }}>{va.question}</div>}
                            {
                              <div style={{ color: 'green' }}>
                                <i className='fas fa-check'></i>
                                {va.correct}
                              </div>
                            }
                            {va.point === 0 ? (
                              <div style={{ color: 'red' }}>
                                <i className='fas fa-times'></i>
                                Your answer: {va.your_answer}
                              </div>
                            ) : null}
                          </div>
                          <br></br>
                        </div>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br></br>
            </div>
          ))
        : null}
    </div>
  )
}

export default RamadanResultsCard
