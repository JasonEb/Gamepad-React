import React from 'react'

class ShieldDropMeter extends React.Component {
  render () {
    return <div>
    <pre>Analog Stick Down: {this.props.axes[1].toPrecision(3)}</pre>
    <pre>C-Stick Down: {this.props.axes[2].toPrecision(3)}</pre>
    </div>
  }
}

export default ShieldDropMeter
