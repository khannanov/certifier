import React from 'react'
import { shallow } from 'enzyme'
import { CertificationEdit } from './CertificationEdit'
import CertificationForm from '../components/CertificationForm'
import normalizedMock from '../../../../config/normalized.db.mock'
import RaisedButton from 'material-ui/RaisedButton'
import questions from '../../questions'

const { QuestionListContainer } = questions.containers
let wrapper

xdescribe(`CertificationEdit container`, () => {
  beforeEach(() => {
    wrapper = shallow(<CertificationEdit certification={normalizedMock.certifications.cert1}/>)
  })

  it('should contain CertificationForm', () => {
    expect(wrapper.find(CertificationForm).length).toBe(1)
  })

  it('it should render add question link', () => {
    expect(wrapper.find(RaisedButton).length).toBe(1)
  })

  it('it should render questions list container', () => {
    expect(wrapper.find(QuestionListContainer).length).toBe(1)
  })
})


