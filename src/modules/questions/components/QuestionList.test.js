import React from 'react'
import QuestionList from './QuestionList'
import { shallow } from 'enzyme'
import normalizedMock from '../../../../config/normalized.db.mock'

xdescribe('QuestionList component', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<QuestionList questions={{}}/>)
    expect(wrapper.length).toBe(1)
  })

  it('should render question list', () => {
    const wrapper = shallow(<QuestionList questions={normalizedMock.questions}/>)
    expect(wrapper.find('span').length).toBe(Object.keys(normalizedMock.questions).length)
  })
})