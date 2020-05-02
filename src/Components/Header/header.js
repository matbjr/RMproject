import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//import GoogleLogin from './google_login'
import { rmCoursesShow, rmCoursesHide } from '../../Redux/RM-courses_init/rm_courses_init_actions'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { dataLoadedOff } from '../../Redux/Ramadan_quiz_results/indivisual_actions'

function Header() {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg='success' expand='lg' variant='dark'>
        <Navbar.Brand target='_blank' href='https://reliabilitymeasures.com/'>
          Reliability Measures
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link className='text-light nav-link' to='/'>
              Home
            </Link>
            <Link className='text-light nav-link' to='/analyze'>
              Analyze Test
            </Link>
            <Link
              className='text-light nav-link'
              to='/ramazan'
              onClick={() => {
                dispatch(dataLoadedOff())
              }}>
              Ramadan Quiz Results
            </Link>

            <NavDropdown title={<span className='text-light my-auto'>Courses</span>} id='basic-nav-dropdown'>
              <NavDropdown.Item
                as={Link}
                to='/courses'
                onClick={() => {
                  dispatch(rmCoursesShow())
                }}>
                Google Classroom Courses
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/courses'
                onClick={() => {
                  dispatch(rmCoursesHide())
                }}>
                R-M Courses (samples)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* <GoogleLogin /> */}
      </Navbar>
    </div>
  )
}

export default Header
