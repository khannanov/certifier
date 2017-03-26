import React, { Component, PropTypes } from 'react';

class CertificationForm extends Component {
  render() {
    const {
      name,
      description,
      onSubmit,
      onChange
    } = this.props;

    return (
      <form onSubmit={onSubmit}>
        name: <input value={name} onChange={onChange('name')} /> <br/>
        description: <input value={description} onChange={onChange('description')} /> <br/>
        <input type='submit'/>
      </form>
    );
  }
}

CertificationForm.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
};

export default CertificationForm;