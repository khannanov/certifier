import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Home from 'material-ui/svg-icons/action/home';

class Header extends Component {
  render() {
    return (
      <AppBar title="Certifier"
              iconElementRight={<FlatButton href="/add" label="Add new certification"/>}
              iconElementLeft={<IconButton href="/"><Home/></IconButton>}
      >

      </AppBar>
    )
  }
}

Header.propTypes = {};

export default Header;