import React from 'react'

class RButton extends React.Component {
  render () {
    const {button, axis} = this.props
    let size = '3em'
    let opacity = axis + 1.25
    let outerStyle = { backgroundColor: 'darkgrey',
                       borderRadius: '2.5em',
                       fontSize: 'large',
                       width: size,
                       textAlign: 'center',
                       opacity,
                       display: 'table'}
    let innerStyle = { color: 'lightgrey' }

    return <div id="r-button" style={outerStyle}>
      <div style={innerStyle} className="rButton">R</div>
    </div>
  }
}

export default RButton
