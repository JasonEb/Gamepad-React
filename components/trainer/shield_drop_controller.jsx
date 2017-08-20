import React from 'react'

import AnalogStick from '../gamecube_controller/AnalogStick'
import CStick from '../gamecube_controller/CStick'

class ShieldDropController extends React.Component {
  render () {
    let padStyle = {
      backgroundColor: 'dimgray',
      borderRadius: '2.5em',
      width: '200px',
      padding: '1em 1em 1em 1em',
      margin: 'auto'
    }

    let { axes } = this.props.gamepad

    return <div style={padStyle}>
      <AnalogStick xAxis={axes[0]} yAxis={axes[1]} />
      <CStick xAxis={axes[5]} yAxis={axes[2]} />
    </div>
  }
}

export default ShieldDropController
