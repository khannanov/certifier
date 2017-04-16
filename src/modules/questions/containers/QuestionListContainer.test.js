import React from 'react'
import { shallow, mount } from 'enzyme'
import QuestionListContainerConnected, { QuestionListContainer } from './QuestionListContainer'
import QuestionList from '../components/QuestionList'
import normalizedMock from '../../../../config/normalized.db.mock'
import { getQuestionsByIds } from '../actions'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const certification = {
  id: 'cert1',
  name: 'Certification name',
  description: 'certification description',
  questions: ['q1', 'q2', 'q3']
}

let component

describe('container QuestionList', () => {
  beforeEach(() => {
    component = shallow(<QuestionListContainer questionsIds={certification.questions} certificationId={certification.id}/>)
  })

  it('it should contain QuestionList component', () => {
    expect(component.find(QuestionList)).toBeTruthy()
  })

  // it('should contain questionIds props', () => {
  //   expect(component.props)
  // })
})

describe('connected container QuestionList', () => {
  it('should contain action prop', () => {
    // todo @see http://www.thereformedprogrammer.net/unit-testing-react-components-that-use-redux/
    const store = mockStore({})

    const wrapper = mount(
      <Provider store={store}>
        <QuestionListContainerConnected questionsIds={Object.keys(normalizedMock.questions)}
                                        getQuestionsByIds={getQuestionsByIds}/>
      </Provider>
    )
    expect(wrapper.props().getQuestionsByIds).toBeDefined()
  })
})