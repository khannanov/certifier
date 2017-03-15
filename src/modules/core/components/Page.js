import React, {Component, PropTypes} from 'react';

class Page extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};


export default Page;