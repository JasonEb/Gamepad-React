import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import App from './gamecube_controller/app.jsx'

class Root extends React.Component {
  render () {
    return (
      <HashRouter>
        <Route path="/debug" component={App} />
      </HashRouter>
    )
  }
}

export default Root
