import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, logOut } from '../Redux/Google_login/google_actions'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { get_config, get_service_config } from '../Components/Config'

function Header() {
  const isLogin = useSelector((state) => state.google_json.isLogin)
  const google_json = useSelector((state) => state.google_json.data)
  const user_name = isLogin ? google_json.profileObj.name : ''
  console.log(user_name)
  const dispatch = useDispatch()
  const signIn = (response) => {
    console.log(response)
    dispatch(loginSuccess(response))
  }
  const error = (response) => {
    console.log(response)
  }
  const logout = (response) => {
    console.log(response)
    dispatch(logOut())
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
        {isLogin ? (
          <h4 className='google-user'>Welcome {user_name}</h4>
        ) : (
          <div></div>
        )}
        {!isLogin ? (
          <GoogleLogin
            clientId={get_config('application_client_id')}
            buttonText='Sign in with Google'
            onSuccess={signIn}
            onFailure={error}
            isSignedIn={true}
            scope='https://www.googleapis.com/auth/spreadsheets.readonly'
            cookiePolicy={'single_host_origin'}
          />
        ) : (
          <GoogleLogout
            clientId={get_config('application_client_id')}
            buttonText='Logout'
            onLogoutSuccess={logout}
          />
        )}
      </Navbar>
    </div>
  )
}

export default Header
