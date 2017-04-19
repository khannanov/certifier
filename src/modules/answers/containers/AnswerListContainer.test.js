import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('container AnswerList', () => {
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