import React from 'react'
import { shallow } from 'enzyme'
import QuestionForm from './QuestionForm'

describe('QuestionForm component', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<QuestionForm/>)
    expect(wrapper.length).toBe(1)
  })
})
