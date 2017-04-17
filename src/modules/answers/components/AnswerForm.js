import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const AnswerForm = (props) => {
  const {
    answer,
    onSubmit,
    onChange
  } = props

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={answer.name}
        floatingLabelText="answer name"
        onChange={onChange('name')}
      /><br />
      <RaisedButton label="Submit" primary={true} type="submit"/>
    </form>
  )
}

AnswerForm.propTypes = {
  answer: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
}

export default AnswerForm