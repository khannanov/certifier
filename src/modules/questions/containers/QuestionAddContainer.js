import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import QuestionForm from '../components/QuestionForm'

export class QuestionAddContainer extends Component {
  state = {
    name: ''
  }

  render () {
    return (
      <div>
        <p>Question creation</p>
        <QuestionForm onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      question={this.state}
        />
      </div>
    )
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.addQuestion(this.state, this.props.match.params.id)
  }

  onChange = field => e => {
    e.preventDefault()

    this.setState({ [field]: e.target.value })
  }

}

QuestionAddContainer.propTypes = {
  addQuestion: PropTypes.func,

}
QuestionAddContainer.defaultProps = {}

export default connect(null, { addQuestion })(QuestionAddContainer)
