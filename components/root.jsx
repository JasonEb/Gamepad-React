import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

// components
import GamepadsContainer from './gamecube_controller/gamepads_container.jsx'
import Trainer from './trainer/trainer.jsx'
import Welcome from './welcome/welcome.jsx'
import NavBar from './navbar/navbar.jsx'

class Root extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Trainer} />
          <Route path="/debug" component={GamepadsContainer} />
          <Route path="/trainer" component={Trainer} />
          <Route path="/welcome" component={Welcome} />
        </div>
      </HashRouter>
    )
  }
}

export default Root
