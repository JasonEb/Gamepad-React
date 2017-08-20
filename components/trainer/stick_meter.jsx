import React from 'react'

import ColorMeter from './color_meter.jsx'

class StickMeter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render () {
    let { axis, name } = this.props
    let { count } = this.state
    let className = `${name}-stick-meter`

    let stickStyle = {
      width: '33%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }

    return (
      <div className="stick-meter" style={stickStyle}>
        <h5>{name} Stick Down</h5>
        <pre>{axis.toPrecision(3)}</pre>
        <pre>Count: {count}</pre>
        <ColorMeter className={className} percentage={axis} />
      </div>
  ) }
}

export default StickMeter
