import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <ul className='navbar' >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/debug">Debug</Link>
          </li>
          <li>
            <Link to="/trainer">Trainer</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
