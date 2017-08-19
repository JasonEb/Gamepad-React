import React from 'react'

import ColorMeter from './color_meter.jsx'

class ShieldDropMeter extends React.Component {
  render () {
    let { axes } = this.props
    return (
      <div className="shield-drop-meter">
        <pre>Analog Stick Down: {axes[1].toPrecision(3)}</pre>
        <ColorMeter className="analog-stick-meter" percentage={axes[1]} />
        <pre>C-Stick Down: {this.props.axes[2].toPrecision(3)}</pre>
        <ColorMeter className="c-stick-meter" percentage={axes[2]} />
      </div>
  ) }
}

export default ShieldDropMeter
