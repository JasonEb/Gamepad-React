import React from 'react'
import ShieldDropController from './shield_drop_controller'
import ShieldDropMeter from './shield_drop_meter.jsx'

class ShieldDropPad extends React.Component {

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

    return (
      <div id="gamepad">
        <ShieldDropController gamepad={gamepad} />
        <div style={axesStyle}>Down Meter
        <ShieldDropMeter axes={axes} />
        </div>
      </div>
    )
  }
}

export default ShieldDropPad
