import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import RamadanResultsCard from './ramadan_results_cards'

function RamazanResultsPage() {
  return (
    <div>
      <Container fluid='sm'>
        <Row className='justify-content-md-center'>
          <Col xs='8'>
            <RamadanResultsCard />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RamazanResultsPage
