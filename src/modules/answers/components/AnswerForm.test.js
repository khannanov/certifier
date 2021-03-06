import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AnswerForm from './AnswerForm'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const answer = {
  name: 'test name',
  answers: ['a1', 'a2', 'a3']
}

const value = 'answer test name'
const onChange = jest.fn()
const onSubmit = jest.fn()
let component

describe('AnswerForm component', () => {
  beforeEach(() => {
    component = shallow(<AnswerForm answer={answer} onChange={onChange} onSubmit={onSubmit}/>)
  })

  it('should render without crash', () => {
    expect(component.length).toBe(1)
  })

  it('should render RaisedButton', () => {
    expect(component.find(RaisedButton)).toBeDefined()
  })

  it('should render TextField and has change handler', () => {
    expect(component.find(TextField)).toBeDefined()
    expect(component.find(TextField).props('onChange')).toBeDefined()
  })
})

describe('entering some text', () => {
  beforeEach(() => {
    component.find(TextField).simulate('change', value)
  })

  it('should call onChange on input changes', () => {
    expect(onChange).toBeCalledWith('name')
  })

  it('should call onSubmit on form submit', () => {
    const e = { preventDefault: jest.fn() }
    component.simulate('submit', e)
    expect(onSubmit).toBeCalledWith(e)
  })
})
