import React from 'react'

import ColorMeter from './color_meter.jsx'

class StickMeter extends React.Component {

  render () {

    let { axis, name } = this.props
    let className = `${name}-stick-meter`
    let style = {
      border: '1px solid blue'
    }

    return (
      <div className="stick-meter" style={style}>
        <pre>{name} Stick Down: {axis.toPrecision(3)}</pre>
        <ColorMeter className={className} percentage={axis} />
      </div>
  ) }
}

export default StickMeter
