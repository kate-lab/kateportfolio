import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import Navbar from './components/common/Navbar'

import About from './components/about/About'
import Rawr from './components/about/Rawr'
import Ultrasleek from './components/about/Ultrasleek'

function App() {

  return (

    <div className="site-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/rawr">
            <Rawr />
          </Route>
          <Route exact path="/ultrasleek">
            <Ultrasleek />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  )

}

export default App
