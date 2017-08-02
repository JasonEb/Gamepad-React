import React from 'react'

import AnalogStick from '../gamecube_controller/AnalogStick'
import CStick from '../gamecube_controller/CStick'

class ShieldDropController extends React.Component {
  render () {
    let padStyle = { backgroundColor: 'darkslategray',
                      border: '1px solid black',
                      borderRadius: '2.5em',
                      width: '200px',
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
      <AnalogStick xAxis={axes[0]} yAxis={axes[1]} />
      <CStick xAxis={axes[5]} yAxis={axes[2]} />
    </div>
  }
}

export default ShieldDropController
