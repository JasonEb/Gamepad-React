import React from 'react'

class ColorMeter extends React.Component {
  render () {
    let { percentage } = this.props
    return (
      <div>
        Color Meter: {percentage}
      </div>
  ) }
}

export default ColorMeter
