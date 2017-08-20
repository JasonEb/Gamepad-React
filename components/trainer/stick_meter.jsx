import React from 'react'

import ColorMeter from './color_meter.jsx'

class StickMeter extends React.Component {

  render () {
    let { axis, name } = this.props
    let className = `${name}-stick-meter`
    let stickStyle = {
      border: '1px solid green',
      width: '33%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }

    return (
      <div className="stick-meter" style={stickStyle}>
        <h5>{name} Stick Down</h5>
        <pre>{axis.toPrecision(3)}</pre>
        <ColorMeter className={className} percentage={axis} />
      </div>
  ) }
}

export default StickMeter
