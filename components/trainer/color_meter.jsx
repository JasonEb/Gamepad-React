import React from 'react'

class ColorMeter extends React.Component {
  render () {
    let { percentage } = this.props
    let colorNumber = parseInt(percentage * 255)
    let color = `rgb(${colorNumber}, 255, 0)`

    let squareStyle = {
      width: '5em',
      height: '5em',
      border: `1px solid ${color}`,
      backgroundColor: color
    }
    
    return (
      <div className='color-meter' >
        Color Meter: {percentage}
        <div className="color-square" style={squareStyle} />
      </div>
  ) }
}

export default ColorMeter
