import React from 'react'

class AnalogStick extends React.Component {
  componentDidMount () {
    this.updateCanvas()
  }

  componentDidUpdate () {
    this.updateCanvas()
    console.log("updating ...")
  }
  updateCanvas () {
    const ctx = this.refs.analogStick.getContext('2d')
    const { xAxis, yAxis } = this.props

    ctx.clearRect(0, 0, 100, 100)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 100, 100)

    let circle = new Path2D()
    let x = 100 / 2
    let y = 100 / 2

    x = x + x * xAxis
    y = y + y * yAxis
    circle.arc(x, y, 15, 0, 2 * Math.PI)
    ctx.fillStyle = 'grey'
    ctx.fill(circle)
  }
  render () {
    return <canvas ref="analogStick" width={100} height={100}/>
  }
}

export default AnalogStick
