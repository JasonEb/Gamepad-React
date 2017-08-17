import React from 'react'

class ColorMeter extends React.Component {
  render () {
    let { percentage } = this.props
    let squareStyle = {
      width: '5em',
      height: '5em',
      border: '1px solid rgb(0,0,0)'
    }
    return (
      <div className='color-meter' >
        Color Meter: {percentage}
        <div className="color-square" style={squareStyle} />
      </div>
  ) }
}

export default ColorMeter
