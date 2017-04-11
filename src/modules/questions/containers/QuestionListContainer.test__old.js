import React from 'react'
import { shallow, mount } from 'enzyme'
import QuestionListContainerConnected, { QuestionListContainer } from './QuestionListContainer'
import QuestionList from '../components/QuestionList'
import normalizedMock from '../../../../config/normalized.db.mock'
import { getQuestionsByIds } from '../actions'

describe('container QuestionList', () => {
  xit('it should contain QuestionList component', () => {
    const wrapper = shallow(<QuestionListContainer/>)
    expect(wrapper.find(QuestionList)).toBeTruthy()
  })

  xit('should contain questionIds props', () => {
    const wrapper = mount(<QuestionListContainer questionsIds={Object.keys(normalizedMock.questions)}
                                                 getQuestionsByIds={getQuestionsByIds}
    />)
    expect(wrapper.props().questionsIds).toBeTruthy()
  })
})

describe('connected container QuestionList', () => {
  xit('should contain action prop', () => {
    // todo @see http://www.thereformedprogrammer.net/unit-testing-react-components-that-use-redux/
    const wrapper = mount(<QuestionListContainerConnected questionsIds={Object.keys(normalizedMock.questions)}
                                                            getQuestionsByIds={getQuestionsByIds}
    />)
    expect(wrapper.props().getQuestionsByIds).toBeDefined()
  })
})