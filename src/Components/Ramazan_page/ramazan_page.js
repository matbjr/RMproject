import React from 'react'
import RamazanForm from './ramazan_form'
import { Row, Col, Container } from 'react-bootstrap'
import RamazanStat4 from './ramazan_stat_4'
import RamazanStat5 from './ramazan_stat_5'

function RamazanPage() {
  return (
    <div>
      <Container fluid='sm'>
        <Row className='justify-content-md-center'>
          <Col xs='10'>
            <h1 style={{ backgroundColor: '#e9ecef' }}>Ramadan Mubarak !</h1>
            <br></br>
          </Col>
          <Col xs='5'>
            <RamazanForm />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs='10'>
            <br></br>
            <h2 style={{ backgroundColor: '#e9ecef' }}>Overall Results</h2>
            <br></br>
          </Col>
          <Col xs='10'>
            <RamazanStat4 />
          </Col>
          <Col xs='8'>
            <RamazanStat5 />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RamazanPage
