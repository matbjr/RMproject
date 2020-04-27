import React from 'react'
import './App.css'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import Analyzepage from './Components/Analyze_page/Analyze_page'
import Home from './Components/home_page'
import Error from './Components/error_page'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/header'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/analyze' component={Analyzepage} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
