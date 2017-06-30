import React from 'react'
import Gamepad from '../gamepad.jsx'
import Route from 'react-router-dom'

// added routes, focus on seperating gamepad detection and default screen
// import DefaultScreen from '../default_screen/DefaultScreen.jsx'

class GamepadsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { controllers: {}, pollId: 0 }
    this.connectHandler = this.connectHandler.bind(this)
    this.disconnectHandler = this.disconnectHandler.bind(this)
    this.addGamepad = this.addGamepad.bind(this)
    this.pollGamepads = this.pollGamepads.bind(this)
    this.initializeSession = this.initializeSession.bind(this)
  }

  addGamepad (gamepad) {
    let {controllers} = this.state
    controllers[gamepad.index] = gamepad
    this.setState({controllers: controllers})
  }

  componentDidMount () {
    const haveEvents = 'GamepadEvent' in window
    const haveWebkitEvents = 'WebKitGamepadEvent' in window
    const { connectHandler, pollGamepads, disconnectHandler, initializeSession } = this
    if (haveEvents) {
      // wtf, had to reverse these events...
      window.addEventListener('gamepadconnected', disconnectHandler)
      window.addEventListener('gamepaddisconnected', connectHandler)
    } else if (haveWebkitEvents) {
      window.addEventListener('webkitgamepadconnected', connectHandler)
      window.addEventListener('webkitgamepaddisconnected', disconnectHandler)
    }

    let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [])
    if (gamepads) {
      pollGamepads()
      initializeSession()
    }
  }

  componentWillUnmount () {
    clearInterval(this.state.pollId)
  }

  initializeSession () {
    // let pollId = setInterval(this.pollGamepads)
    let pollId = requestAnimationFrame(this.pollGamepads)
    this.setState({pollId})
  }

  connectHandler (e) {
    this.addGamepad(e.gamepad)
    this.initializeSession()
    console.log("polling started in connectHandler")
  }

  disconnectHandler (e) {
    console.log('Disconnected')
    // clearInterval(this.state.pollId)
    window.cancelAnimationFrame(this.state.pollId)
  }

  pollGamepads () {
    let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [])
    for (var i = 0; i < gamepads.length; i++) {
      if (gamepads[i]) {
        if (!(gamepads[i].index in this.state.controllers)) {
          this.addGamepad(gamepads[i])
        } else {
          let {controllers} = this.state
          controllers[gamepads[i].index] = gamepads[i]
          this.setState({controllers})
        }
      }
    }
    requestAnimationFrame(this.pollGamepads)
  }

  render () {
    let _gamePads = Object.keys(this.state.controllers).map((key, idx) => {
      return <Gamepad gamepad={this.state.controllers[key]} key={idx} />
    })

    return (
      <div id="gamepads-container">
        {_gamePads}
      </div>
    )
  }
}

export default GamepadsContainer
