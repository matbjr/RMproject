import React from 'react'
import Inputjumo from './input_jumbo'
import Crinputtable from './cr_input_table'
import { Container, Row, Col } from 'react-bootstrap'
import Crresultstable from './cr_results_table'

function Analyzepage() {
  return (
    <div>
      <Container fluid='sm'>
        <Row className='justify-content-md-center'>
          <Col xs='10'>
            <Inputjumo />
            <Crinputtable />
          </Col>
        </Row>
        <br></br>
        <Row className='justify-content-md-center'>
          <Col xs='10'>
            <Crresultstable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Analyzepage
