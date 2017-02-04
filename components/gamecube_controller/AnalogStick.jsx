import React from 'react'

class AnalogStick extends React.Component {
  componentDidMount () {
    this.updateCanvas()
  }

  componentDidUpdate () {
    this.updateCanvas()
  }
  updateCanvas () {
    // clear canvas
    // draw bg rect
    // draw octagon
    // draw circle
    const ctx = this.refs.analogStick.getContext('2d')
    const { xAxis, yAxis } = this.props
    ctx.clearRect(0, 0, 100, 100)
    ctx.fillStyle = 'darkgrey'
    ctx.fillRect(0, 0, 100, 100)

    // octagon
    let octagon = new Path2D()
    let size = 45
    let Xcenter = 50
    let Ycenter = 50
    octagon.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0))
    for (var i = 1; i <= 8; i += 1) {
      octagon.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / 8), Ycenter + size * Math.sin(i * 2 * Math.PI / 8))
    }
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.stroke(octagon)

    let circle = new Path2D()
    let x = 100 / 2
    let y = 100 / 2

    x = x + x * xAxis
    y = y + y * yAxis
    circle.arc(x, y, 15, 0, 2 * Math.PI)
    ctx.fillStyle = 'grey'
    ctx.globalAlpha = 0.90
    ctx.fill(circle)
    ctx.globalAlpha = 1
  }
  render () {
    return <canvas ref="analogStick" width={100} height={100}/>
  }
}

export default AnalogStick
