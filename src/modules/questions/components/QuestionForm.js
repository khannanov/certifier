import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const QuestionForm = (props) => {
  const {
    question,
    onSubmit,
    onChange
  } = props

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={question.name}
        floatingLabelText="Question name"
        onChange={onChange('name')}
      /><br />
      <RaisedButton label="Submit" primary={true} type="submit"/>
    </form>
  )
}

QuestionForm.propTypes = {
  question: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
}
QuestionForm.defaultProps = {}

export default QuestionForm