import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Analyzepage from './Components/Analyze_page/Analyze_page'
import Home from './Components/home_page'
import Error from './Components/error_page'
import Header from './Components/Header/header'
import CoursesPage from './Components/Courses_page/courses_page'
//import RamazanPage from './Components/Ramazan_page/ramazan_page'
import Initializer from './Components/initializer'
import Test from './Components/test'
import QuizQuestionPage from './Components/Quiz_question_page/quiz_question_page'

function App() {
  const drop_init = useSelector((state) => state.dropbox.init)
  return (
    <BrowserRouter>
      <Initializer />
      {drop_init ? (
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/analyze' component={Analyzepage} exact />
            <Route path='/courses' component={CoursesPage} exact />
            <Route path='/dailyquiz' component={QuizQuestionPage} exact />
            {/* <Route path='/ramazan' component={RamazanPage} exact /> */}
            <Route path='/test' component={Test} exact />
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
