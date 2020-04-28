import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

function CourseDetails() {
  const display_bool = useSelector((state) => state.rm_courses_json.display)
  const data_loaded = useSelector((state) => state.rm_courses_json.loaded)
  const google_courses = useSelector((state) => state.google_json.data)
  const rm_courses = useSelector((state) => state.rm_courses_json.data)
  let courses =
    display_bool && data_loaded
      ? google_courses
      : !display_bool && data_loaded
      ? rm_courses
      : []
  return (
    <div>
      {data_loaded ? (
        courses.courses.map((val, index) => (
          <Card key={index}>
            <Card.Header as='h5'>{val.name}</Card.Header>
            <Card.Body>
              <Card.Title>{val.section}</Card.Title>
              <Card.Text>
                {val.descriptionHeading}
                <br></br>
                {val.description}
              </Card.Text>
              <Button
                variant='primary'
                target='_blank'
                data-toggle='tooltip'
                data-placement='top'
                title='Make sure you are logged into the right google account for this link to work'
                href={val.alternateLink}>
                Go to Google Classroom
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default CourseDetails
