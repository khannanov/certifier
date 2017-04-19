import React from 'react'
import { shallow, mount } from 'enzyme'
import QuestionEditContainerConnected, { QuestionEditContainer } from './QuestionEditContainer'
import QuestionForm from '../components/QuestionForm'
import answers from '../../answers'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
// material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
//
Error.stackTraceLimit = 10;

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const { AnswerList } = answers.components

const match = { params: { qid: 'q1', cid: 'cert1' } }

describe('QuestionAddContainer component', () => {
  it('should render QuestionAddContainer without crash', () => {
    const wrapper = shallow(<QuestionEditContainer match={match}/>)
    expect(wrapper.length).toBe(1)
  })

  it('should contain AnswerList component', () => {
    const wrapper = shallow(<QuestionEditContainer match={match}/>)
    expect(wrapper.find(AnswerList).length).toBe(1)
  })

  it('should contain QuestionForm component', () => {
    const wrapper = shallow(<QuestionEditContainer match={match}/>)
    expect(wrapper.find(QuestionForm).length).toBe(1)
  })
})

describe('QuestionAddContainer connected', () => {
  it('mounted should contain AnswersList component', () => {
    const store = mockStore({ })
    const getQuestionById = jest.fn()
    const updateQuestion = jest.fn()

    const wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <QuestionEditContainer match={match}
                                 getQuestionById={getQuestionById}
                                 updateQuestion={updateQuestion}
          />
        </MuiThemeProvider>
      </Provider>
    )


  })
})
