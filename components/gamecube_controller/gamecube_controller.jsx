import React from 'react'
import AButton from './AButton'
import BButton from './BButton'
import AnalogStick from './AnalogStick'

class GameCubeController extends React.Component {
  render () {
    let padStyle = {backgroundColor: 'darkslategray',
                    border: '1px solid black',
                    borderRadius: '2.5em',
                    width: '40em',
                    height: '20em'
                    }
    let { buttons, axes } = this.props.gamepad
    return <div style={padStyle}>
      <BButton button={buttons[2]} />
      <AButton button={buttons[1]} />
      <AnalogStick xAxis={axes[0]} yAxis={axes[1]} />
    </div>
  }
}

export default GameCubeController
