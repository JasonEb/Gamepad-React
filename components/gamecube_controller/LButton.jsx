import React from 'react'

class LButton extends React.Component {
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
    let innerStyle = { color: 'lightgrey'}

    return <div id="l-button" style={outerStyle}>
      <div className="lButton" style={innerStyle}>L</div>
    </div>
  }
}

export default LButton
