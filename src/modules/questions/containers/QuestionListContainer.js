import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getQuestionsByIds } from '../actions'
import QuestionList from '../components/QuestionList'

export class QuestionListContainer extends Component {
  componentDidMount () {
    this.props.getQuestionsByIds(this.props.questionsIds);
  }

  render () {
    return (
      <QuestionList questions={this.props.questions}/>
    )
  }
}

QuestionListContainer.defaultProps = {
  questions: {},
  questionsIds: []
}

QuestionListContainer.propTypes = {
  questionsIds: PropTypes.array.isRequired,
  getQuestionsByIds: PropTypes.func,
  questions: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      answers: PropTypes.array
    })
  )
}

export default connect(
  null,
  { getQuestionsByIds }
)(QuestionListContainer)
