import React from 'react'

class ZButton extends React.Component {
  render () {
    const {button} = this.props
    let size = '3em'
    let opacity = button.pressed ? '1.0' : '0.75'
    let outerStyle = { backgroundColor: 'purple',
                       borderRadius: '2.5em',
                       fontSize: 'large',
                       width: size,
                       textAlign: 'center',
                       opacity,
                       display: 'table'}
    let innerStyle = { color: 'plum'}

    return <div id="z-button" style={outerStyle}>
      <div className="zButton" style={innerStyle}>Z</div>
    </div>
  }
}

export default ZButton
