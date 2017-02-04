import React from 'react'
import AButton from './AButton'
import BButton from './BButton'
import AnalogStick from './AnalogStick'
import CStick from './CStick'

class GameCubeController extends React.Component {
  render () {
    let padStyle = { backgroundColor: 'darkslategray',
                      border: '1px solid black',
                      borderRadius: '2.5em',
                      width: '40em',
                      height: '20em',
                      padding: '1em 1em 1em 1em'}

    let baxRow = { display: 'flex',
                   width: '10em',
                   justifyContent: 'space-around'}

    let { buttons, axes } = this.props.gamepad
    return <div style={padStyle}>
      <AnalogStick xAxis={axes[0]} yAxis={axes[1]} />
      <CStick xAxis={axes[5]} yAxis={axes[2]} />
      <div style={baxRow}>
        <BButton button={buttons[2]} />
        <AButton button={buttons[1]} />
      </div>
    </div>
  }
}

export default GameCubeController
