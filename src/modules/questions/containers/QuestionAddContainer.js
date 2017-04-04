import React, {
  Component,
} from 'react'
import QuestionList from '../components/QuestionList'
import QuestionForm from '../components/QuestionForm'

class QuestionAddContainer extends Component {
  state = {
    name: ''
  }

  render () {
    return (
      <div>
        QuestionAddContainer
        <QuestionForm/>
      </div>
    )
  }
}

QuestionAddContainer.propTypes = {}
QuestionAddContainer.defaultProps = {}

export default QuestionAddContainer
