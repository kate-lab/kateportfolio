import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import Navbar from './components/common/Navbar'

import About from './components/about/About'

function App() {

  return (

    <div className="site-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  )

}

export default App
