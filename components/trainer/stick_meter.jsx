import React from 'react'

import ColorMeter from './color_meter.jsx'

class StickMeter extends React.Component {
  constructor (props) {
    super(props)
    this.prevPercents = []
    this.count = 0
    this.pressed = false
  }

  render () {
    let { axis, name } = this.props
    let { prevPercents, count, pressed } = this
    let className = `${name}-stick-meter`

    let stickStyle = {
      width: '33%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }

    this.pressed = (axis > 0.10)
    // check if pressed
    if (pressed) {
      if (prevPercents.length <= 6) {
        prevPercents.push(axis.toPrecision(3))
      } else {
        prevPercents.shift()
        prevPercents.push(axis)
        console.log(prevPercents)
      }
    }

    return (
      <div className="stick-meter" style={stickStyle}>
        <h5>{name} Stick Down</h5>
        <pre>{axis.toPrecision(3)}</pre>
        <pre>PrevPercent: {prevPercents[5]}</pre>
        <pre>Count: {count}</pre>
        <pre>Pressed: {pressed.toString()}</pre>
        <ColorMeter className={className} percentage={axis} />
      </div>
  ) }
}

export default StickMeter
