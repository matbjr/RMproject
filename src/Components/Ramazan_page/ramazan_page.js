import React from 'react'
import RamazanForm from './ramazan_form'
import { Row, Col, Container } from 'react-bootstrap'

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
      </Container>
    </div>
  )
}

export default RamazanPage
