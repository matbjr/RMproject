import React from 'react'
import CourseJumbo from './course_jumbo'
import { Row, Col, Container } from 'react-bootstrap'
import CourseLogo from './course_logo'
import CourseDetails from './course_details'

function CoursesPage() {
  return (
    <div>
      <Container fluid='sm'>
        <Row className='justify-content-md-center'>
          <Col xs='1'></Col>
          <Col xs='10'>
            <CourseJumbo />
            <CourseDetails />
          </Col>
          <Col xs='1'>
            <CourseLogo />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CoursesPage
