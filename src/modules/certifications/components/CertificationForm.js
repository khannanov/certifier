import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
        <TextField
          value={name}
          floatingLabelText="certification name"
          onChange={onChange('name')}
        /><br />
        <TextField
          value={description}
          floatingLabelText="certification description"
          onChange={onChange('description')}
        /><br />

        <RaisedButton label="Submit" primary={true} type="submit"/>
      </form>
    );
  }
}

CertificationForm.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  questions: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
};

export default CertificationForm;