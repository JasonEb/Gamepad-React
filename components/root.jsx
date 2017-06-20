import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import App from './gamecube_controller/app.jsx'

class Root extends React.Component {
  render () {
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  }
}

export default Root
