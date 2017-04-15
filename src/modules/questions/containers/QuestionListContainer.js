import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getQuestionsByIds } from '../actions'
import QuestionList from '../components/QuestionList'

export class QuestionListContainer extends Component {
  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.questions);
  }

  componentDidMount () {
    this.props.getQuestionsByIds(this.props.questionsIds);
  }

  render () {
    return (
      <QuestionList questions={this.props.questions} certificationId={this.props.certificationId}/>
    )
  }
}

QuestionListContainer.defaultProps = {
  questions: {},
  questionsIds: []
}

QuestionListContainer.propTypes = {
  certificationId: PropTypes.number.isRequired,
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
  ({ questions }, props) => {
    const filteredIds = Object.keys(questions).filter(qid =>
      props.questionsIds.includes(qid))

    const filteredQuestions = {}

    filteredIds.map(id => filteredQuestions[id] = questions[id])

    return { questions: filteredQuestions }
  },
  { getQuestionsByIds }
)(QuestionListContainer)
