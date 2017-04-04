import React from 'react'
import { shallow } from 'enzyme'
import QuestionAddContainer from './QuestionAddContainer'
import QuestionList from '../components/QuestionList'
import QuestionForm from '../components/QuestionForm'

// todo answers list

describe('QuestionAddContainer component', () => {
  it('should render QuestionAddContainer without crash', () => {
    const wrapper = shallow(<QuestionAddContainer/>)
    expect(wrapper.length).toBe(1)
  })

  it('should contain AnswersList component', () => {
    const wrapper = shallow(<QuestionAddContainer/>)
    expect(wrapper.find(QuestionList).length).toBe(1)
  })

  it('should contain QuestionForm component', () => {
    const wrapper = shallow(<QuestionAddContainer/>)
    expect(wrapper.find(QuestionForm).length).toBe(1)
  })
})
