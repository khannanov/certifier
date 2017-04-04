import React from 'react'
import { shallow } from 'enzyme'
import { CertificationEdit } from './CertificationEdit'
import CertificationForm from '../components/CertificationForm'
import normalizedMock from '../../../../config/normalized.db.mock'
import RaisedButton from 'material-ui/RaisedButton'

describe(`${CertificationEdit.displayName} container`, () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CertificationEdit certification={normalizedMock.certifications.cert1}/>)
  })

  it('should contain CertificationForm', () => {
    expect(wrapper.find(CertificationForm).length).toBe(1)
  })

  fit('it should render add question link', () => {
    expect(wrapper.find(RaisedButton).length).toBe(1)
  })

  fit('it should render questions list', () => {
    // todo answers list
  })
})


