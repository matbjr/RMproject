import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Test() {
  return (
    <div>
      <Row>
        <Col xs='1' style={{ backgroundColor: 'red' }}>
          links
        </Col>
        <Col xs='10'></Col>
      </Row>
    </div>
  )
}

export default Test
