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
          <Route exact path="/" component={Welcome} />
          <Route path="/debug" component={GamepadsContainer} />
          <Route path="/trainer" component={Trainer} />
        </div>
      </HashRouter>
    )
  }
}

export default Root
