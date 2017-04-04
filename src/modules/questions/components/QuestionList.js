import React, { PropTypes } from 'react'

const QuestionList = ({questions}) => <div>
  {Object.keys(questions).map(id => <span key={id}>{questions[id].name}</span>)}
</div>

QuestionList.propTypes = {
  questions: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      answers: PropTypes.array
    })
  )
}

export default QuestionList
