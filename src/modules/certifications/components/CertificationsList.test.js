import React from 'react'
import { shallow } from 'enzyme'
import CertificationList from './CertificationsList'
import storeMock from '../../../../config/normalized.db.mock'

describe('component CertificationsList', () => {
  it('renders certifications when passed in', () => {
    const wrapper = shallow(<CertificationList certifications={storeMock.certifications}/>);

    expect(wrapper.find('CardHeader').length).toBe(Object.keys(storeMock.certifications).length);
  })
})
