import React from 'react'

class XButton extends React.Component {
  render () {
    const {button} = this.props
    let opacity = button.pressed ? '1.0' : '0.75'
    let outerStyle = { backgroundColor: 'grey',
                       borderRadius: '1em',
                       fontSize: 'large',
                       width: '2em',
                       height: '3em',
                       opacity}
    let innerStyle = { color: 'lightgrey', textAlign: 'center' }

    return <div id="x-button" style={outerStyle}>
      <p style={innerStyle}>X</p>
    </div>
  }
}

export default XButton
