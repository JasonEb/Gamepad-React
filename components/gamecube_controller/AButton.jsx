import React from 'react'

class AButton extends React.Component {
  render () {
    const {button} = this.props
    let size = '4em'
    let opacity = button.pressed ? '1.0' : '0.75'
    let outerStyle = { backgroundColor: 'darkCyan',
                       borderRadius: '10em',
                       fontSize: 'large',
                       width: size,
                       height: size,
                       opacity,
                       display: 'table'}
    let innerStyle = { display: 'table-cell',
                       textAlign: 'center',
                       verticalAlign: 'middle',
                       color: 'aqua'}

    return <div id="a-button" style={outerStyle}>
      <p style={innerStyle}>A</p>
    </div>
  }
}

export default AButton
