import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import QuestionAnswerIcon from 'material-ui/svg-icons/action/question-answer'

const AnswerList = ({answers, questionId}) =>
  <div>
    <p>answers:</p>
    <List>
      {Object.keys(answers).map(id =>
        <ListItem key={id}
                  leftIcon={<QuestionAnswerIcon/>}
                  containerElement={<Link to={`/question/${questionId}/question/edit/${id}`}/>}>
          {answers[id].name}
        </ListItem>
      )}
    </List>
  </div>

AnswerList.propTypes = {
  questionId: PropTypes.string.isRequired,
  answers: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      answers: PropTypes.array
    })
  )
}

export default AnswerList
