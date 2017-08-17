import React from 'react'

import ColorMeter from './color_meter.jsx'

class ShieldDropMeter extends React.Component {
  render () {
    let { axes } = this.props
    return (
      <div>
        <pre>Analog Stick Down: {axes[1].toPrecision(3)}</pre>
        <ColorMeter className="analog-stick-meter" percentage={axes[1]} />
        <pre>C-Stick Down: {this.props.axes[2].toPrecision(3)}</pre>
      </div>
  ) }
}

export default ShieldDropMeter
