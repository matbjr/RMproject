import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Analyzepage from './Components/Analyze_page/Analyze_page'
import Home from './Components/home_page'
import Error from './Components/error_page'
import Header from './Components/Header/header'
import CoursesPage from './Components/Courses_page/courses_page'
import RamazanPage from './Components/Ramazan_page/ramazan_page'
import DropboxContainer from './Redux/Dropbox_init/dropbox_container'
import GoogleInitContainer from './Redux/RM-courses_init/rm_courses_init_container'

function App() {
  const drop_init = useSelector((state) => state.dropbox.init)
  return (
    <BrowserRouter>
      <DropboxContainer />
      {drop_init ? (
        <div className='App'>
          <GoogleInitContainer />
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/analyze' component={Analyzepage} exact />
            <Route path='/courses' component={CoursesPage} exact />
            <Route path='/ramazan' component={RamazanPage} exact />
            <Route component={Error} />
          </Switch>
        </div>
      ) : (
        <div></div>
      )}
    </BrowserRouter>
  )
}

export default App
