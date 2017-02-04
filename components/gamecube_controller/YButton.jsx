import React from 'react'

class YButton extends React.Component {
  render () {
    const {button} = this.props
    let size = '3em'
    let opacity = button.pressed ? '1.0' : '0.75'
    let outerStyle = { backgroundColor: 'grey',
                       borderRadius: '1em',
                       fontSize: 'large',
                       width: '3em',
                       height: '2em',
                       position: 'relative',
                       right: '-0.625em',
                       opacity,
                       display: 'table'}
    let innerStyle = { display: 'table-cell',
                       textAlign: 'center',
                       verticalAlign: 'middle',
                       color: 'lightgrey'}

    return <div id="y-button" style={outerStyle}>
      <p style={innerStyle}>Y</p>
    </div>
  }
}

export default YButton
