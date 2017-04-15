import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import QuestionAnswerIcon from 'material-ui/svg-icons/action/question-answer'

const QuestionList = ({questions, certificationId}) =>
  <div>
    <p>Questions:</p>
    <List>
      {Object.keys(questions).map(id =>
        <ListItem key={id}
                  leftIcon={<QuestionAnswerIcon/>}
                  containerElement={<Link to={`/certification/${certificationId}/question/edit/${id}`}/>}>
          {questions[id].name}
        </ListItem>
      )}
    </List>
  </div>

QuestionList.propTypes = {
  certificationId: PropTypes.number.isRequired,
  questions: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      answers: PropTypes.array
    })
  )
}

export default QuestionList
