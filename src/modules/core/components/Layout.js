import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Paper from 'material-ui/Paper'

const style = {
  margin: 'auto',
  width: 1000,
  padding: 20,
}

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Paper style={style}>
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
