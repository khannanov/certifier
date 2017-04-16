import React, {
  Component,
  PropTypes
} from 'react'
import QuestionForm from '../components/QuestionForm'
import { getQuestionById, updateQuestion } from '../actions'
import { connect } from 'react-redux'

class QuestionEditContainer extends Component {
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

    this.props.updateCertification(this.state)
  }

  onChange = e => {
    const { target } = e
    e.preventDefault()
    this.setState({ [target.dataset.name]: target.value })
  }

  render () {
    return (
      <div>
        <p>Question edit</p>
        <QuestionForm onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      question={this.state}
        />
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
  })
}

export default connect(
  ({ questions }, props) => {
    return {
      question: questions[props.match.params.qid]
    }
  },
  { getQuestionById, updateQuestion }
)(QuestionEditContainer)
