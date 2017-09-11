import React from 'react'

import ColorMeter from './color_meter.jsx'

class StickMeter extends React.Component {
  constructor (props) {
    super(props)
    this.prevPercents = []
    this.successes = 0
    this.attempts = 0
    this.maxScore = 0
    this.count = 0
    this.pressed = false
    this.shieldDropCheck = true
    this.shieldDropWindow = 16
    this.shieldDropPct = 0.60
    this.resetSession = this.resetSession.bind(this)
  }

  resetSession () {
    this.successes = 0
    this.attempts = 0
    this.maxScore = 0
    this.count = 0
  }

  render () {
    let { axis, name } = this.props
    let { prevPercents, successes, attempts, pressed, maxScore, count, shieldDropPct,resetSession } = this
    let className = `${name}-stick-meter`

    let stickStyle = {
      width: '33%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }

    this.pressed = (axis > 0.20)

    // check if pressed
    // begin collecting the percents
    if (pressed) {
      let currentPercent = axis.toPrecision(3)
      let {shieldDropWindow} = this
      // percents history
      if (prevPercents.length < shieldDropWindow) {
        prevPercents.push(currentPercent)
      }

      //when shield drop window is full, shield drop check
      if (this.shieldDropCheck && prevPercents.length >= shieldDropWindow) {
        let shieldDropped = false

        //scan frames for shield drop
        for (let idx = 0; idx < prevPercents.length; idx++) {
          let currentPercent = prevPercents[idx]
          if (currentPercent > 0.70) {
            // failed shield drop
            shieldDropped = false
            break;
          }

          if (currentPercent > shieldDropPct) {
            // if any axis percent is above, shield drop is triggered
            shieldDropped = true
          }
        }

        if (shieldDropped) {
          this.successes++
          this.count++
        } else {
          this.maxScore = this.count > this.maxScore ? this.count : this.maxScore
          this.count = 0
        }

        this.attempts++
        this.shieldDropCheck = false
        console.log("prevpercents", prevPercents)
        console.log("Shield Dropped:", shieldDropped.toString())
        console.log("Attempts: ", attempts)
        console.log("Successes: ", successes)
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
        <ColorMeter className={className} percentage={axis} />
        <pre>Count: {count}</pre>
        <pre>Score: {maxScore}</pre>
        <pre>Successes: {successes}</pre>
        <pre>Attempts: {attempts}</pre>
        <pre>Drop Pct: {(successes / attempts).toPrecision(2)}</pre>
        <button onClick={resetSession}>Reset</button>
      </div>
  ) }
}

export default StickMeter
