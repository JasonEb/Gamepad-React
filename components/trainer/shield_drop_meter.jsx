import React from 'react'

import StickMeter from './stick_meter.jsx'
import ColorMeter from './color_meter.jsx'

class ShieldDropMeter extends React.Component {
  render () {
    let { axes } = this.props

    let style = {
      border: '1px solid blue',
      display: 'flex',
      justifyContent: 'center'
    }

    return (
      <div className="meters-container" style={style}>
        <StickMeter axis={axes[1]} name="Analog" />
        <StickMeter axis={axes[2]} name="C" />
      </div>
  ) }
}

export default ShieldDropMeter
