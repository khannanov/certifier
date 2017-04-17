import React, {
  Component,
  PropTypes
} from 'react'
import QuestionForm from '../components/QuestionForm'
import answers from '../../answers'
import { getQuestionById, updateQuestion } from '../actions'
import { connect } from 'react-redux'

const { AnswerList } = answers.components

export class QuestionEditContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props.question
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.question);
  }

  componentDidMount () {
    if (!this.props.question) {
      this.props.getQuestionById(this.props.match.params.qid)
    }
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.updateQuestion(this.state)
  }

  onChange = name => e => {
    e.preventDefault()
    const { target } = e

    this.setState({ [name]: target.value })
  }

  render () {
    return (
      <div>
        <p>Question edit</p>
        <QuestionForm onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      question={this.state}
        />
        <AnswerList questionId={this.state.id}/>
      </div>
    )
  }
}

QuestionEditContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      qid: PropTypes.string.isRequired,
      cid: PropTypes.string.isRequired,
    })
  }).isRequired,
  updateQuestion: PropTypes.func,
  getQuestionById: PropTypes.func
}

export default connect(
  ({ questions }, props) => {
    return {
      question: questions[props.match.params.qid]
    }
  },
  { getQuestionById, updateQuestion }
)(QuestionEditContainer)
