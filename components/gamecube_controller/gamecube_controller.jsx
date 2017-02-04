import React from 'react'
import AButton from './AButton'
import BButton from './BButton'
import RButton from './RButton'
import LButton from './LButton'
import ZButton from './ZButton'
import XButton from './XButton'
import YButton from './YButton'
import AnalogStick from './AnalogStick'
import CStick from './CStick'

class GameCubeController extends React.Component {
  render () {
    let padStyle = { backgroundColor: 'darkslategray',
                      border: '1px solid black',
                      borderRadius: '2.5em',
                      width: '480px',
                      height: '20em',
                      padding: '1em 1em 1em 1em'}
    let baxRow = { display: 'flex',
                   width: '200px',
                   justifyContent: 'center'}
    let yRow = { display: 'flex',
                   width: '200px',
                   justifyContent: 'center'}
    let shoulderRow = { display: 'flex',
                    width: '200px',
                    justifyContent: 'space-around'}
    let { buttons, axes } = this.props.gamepad
    return <div style={padStyle}>
      <div className="shoulderRow" style={shoulderRow}>
        <LButton axis={axes[3]} button={buttons[4]} />
        <ZButton button={buttons[7]} />
        <RButton axis={axes[4]} button={buttons[5]} />
      </div>
      <AnalogStick xAxis={axes[0]} yAxis={axes[1]} />
      <CStick xAxis={axes[5]} yAxis={axes[2]} />
      <div style={yRow}>
        <YButton button={buttons[3]} />
      </div>
      <div style={baxRow}>
        <BButton button={buttons[2]} />
        <AButton button={buttons[1]} />
        <XButton button={buttons[0]} />
      </div>
    </div>
  }
}

export default GameCubeController
