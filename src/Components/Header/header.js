import React from 'react'
import GoogleLogin from './google_login'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg='success' expand='lg' variant='dark'>
        <Navbar.Brand target='_blank' href='https://reliabilitymeasures.com/'>
          Reliability Measures
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='text-light' href='/'>
              Home
            </Nav.Link>
            <Nav.Link className='text-light' href='\analyze'>
              Analyze test
            </Nav.Link>
            <NavDropdown
              title={<span className='text-light my-auto'>Dropdown</span>}
              id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <GoogleLogin />
      </Navbar>
    </div>
  )
}

export default Header
