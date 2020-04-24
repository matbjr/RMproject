import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login'

function Header() {
  const signIn = (response) => {
    console.log(response)
  }
  const error = (response) => {
    console.log(response)
  }
  // const logout = (response) => {
  //   console.log(response)
  // }
  const loading = () => {
    console.log('loading')
  }
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
        {/* <GoogleLogout
          clientId='807686504198-k9ob5s4g4kunufkrtb6mb9s6sr3dkatu.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={logout}
        /> */}
        <GoogleLogin
          clientId='807686504198-k9ob5s4g4kunufkrtb6mb9s6sr3dkatu.apps.googleusercontent.com'
          buttonText='Sign in with Google'
          onRequest={loading}
          onSuccess={signIn}
          onFailure={error}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        />
      </Navbar>
    </div>
  )
}

export default Header
