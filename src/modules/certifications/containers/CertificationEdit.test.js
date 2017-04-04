import React from 'react'
import { CertificationEdit } from './CertificationEdit'
import CertificationForm from '../components/CertificationForm'
import questions from '../../questions'
import normalizedMock from '../../../../config/normalized.db.mock'
import { shallow } from 'enzyme'

const { QuestionForm } = questions.components

describe(`${CertificationEdit.displayName} container`, () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CertificationEdit certification={normalizedMock.certifications.cert1}/>)
  })

  it('should contain CertificationForm', () => {
    expect(wrapper.find(CertificationForm).length).toBe(1)
  })

  it('should contain QuestionForm', () => {
    expect(wrapper.find(QuestionForm).length).toBe(1)
  })
})


