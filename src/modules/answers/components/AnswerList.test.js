import React from 'react'
import AnswerList from './AnswerList'
import { shallow } from 'enzyme'
import normalizedMock from '../../../../config/normalized.db.mock'
import { ListItem } from 'material-ui/List'

const question = normalizedMock.questions.q1
const answers = normalizedMock.answers
let component

describe('AnswerList component', () => {
  beforeEach(() => {
    component = shallow(<AnswerList answers={answers} questionId={question.id}/>)
  })

  it('should render without crash', () => {
    expect(component.length).toBe(1)
  })

  it('should render answers list', () => {
    expect(component.find(ListItem).length).toBe(Object.keys(normalizedMock.answers).length)
  })
})