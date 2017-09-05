import React from 'react'

import ColorMeter from './color_meter.jsx'

class StickMeter extends React.Component {
  constructor (props) {
    super(props)
    this.prevPercents = []
    this.count = 0
    this.pressed = false
    this.shieldDropCheck = true
    this.shieldDropWindow = 16
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

    this.pressed = (axis > 0.20)

    // check if pressed
    // begin collecting the last 6 percents
    // if the last
    if (pressed) {
      let currentPercent = axis.toPrecision(3)
      let {shieldDropWindow} = this

      // percents history
      if (prevPercents.length < shieldDropWindow) {
        prevPercents.push(currentPercent)
      }

      if (this.shieldDropCheck && prevPercents.length >= shieldDropWindow) {
        let shieldDropped = false

        //scan frames for shield drop
        for (let idx = 0; idx < prevPercents.length; idx++) {
          let currentPercent = prevPercents[idx]
          if (currentPercent > 0.70) {
            shieldDropped = false
            break;
          }

          if (currentPercent > 0.63) {
            shieldDropped = true
          }
        }
        console.log("prevpercents", prevPercents)
        console.log("Shield Dropped:", shieldDropped.toString())
        this.shieldDropCheck = false
      }

    } else {
      //if stick is released, reset shield drop check
      this.shieldDropCheck = true
      this.prevPercents = []
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
