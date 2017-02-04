import React from 'react'

class CStick extends React.Component {
  componentDidMount () {
    this.updateCanvas()
  }

  componentDidUpdate () {
    this.updateCanvas()
  }
  updateCanvas () {
    const ctx = this.refs.cStick.getContext('2d')
    const { xAxis, yAxis } = this.props

    ctx.clearRect(0, 0, 100, 100)
    ctx.fillStyle = 'goldenrod'
    ctx.fillRect(0, 0, 100, 100)

    let circle = new Path2D()
    let x = 100 / 2
    let y = 100 / 2

    x = x + x * xAxis
    y = y + y * yAxis
    circle.arc(x, y, 15, 0, 2 * Math.PI)
    ctx.fillStyle = 'yellow'
    ctx.fill(circle)
  }
  render () {
    return <canvas ref="cStick" width={100} height={100}/>
  }
}

export default CStick
