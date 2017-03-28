import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="intro-header">
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">New certification</NavLink></li>
          </ul>
          <hr/>
        </div>
      </header>
    )
  }
}

Header.propTypes = {};

export default Header;