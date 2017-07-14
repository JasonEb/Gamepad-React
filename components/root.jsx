import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

// components
import GamepadsContainer from './gamecube_controller/gamepads_container.jsx'
import Trainer from './trainer/trainer.jsx'
import Welcome from './welcome/welcome.jsx'

class Root extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route path="/home" component={GamepadsContainer} />
          <Route path="/trainer" component={Trainer} />
          <Route path="/welcome" component={Welcome} />
        </div>
      </HashRouter>
    )
  }
}

export default Root
