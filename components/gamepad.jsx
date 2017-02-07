import React from 'react'
import GameCubeController from './gamecube_controller/gamecube_controller'

class Gamepad extends React.Component {

  render () {
    const {gamepad} = this.props
    let {buttons, axes} = gamepad
    let _buttons = buttons.map((button, idx) => {
      return <div key={idx}>Button {idx}: {button.pressed ? 'pressed' : 'unpressed'}</div>
    })
    let _axes = axes.map((axe, idx) => {
      return <div key={idx}>
        <pre>Axe {idx} : {axe.toPrecision(2)}</pre>
        <progress style={progressStyle} max={2} value={axe + 1} />
      </div>
    })
    let axesStyle = {display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}
    let progressStyle={alignSelf: 'flex-end'}
    let buttonsStyle={display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}
    return (
      <div id="gamepad">
        <GameCubeController gamepad={gamepad} />
        <div style={axesStyle}>Axes
        {_axes}
        </div>
        <div>Buttons
          {_buttons}
        </div>
      </div>
    )
  }
}

export default Gamepad
