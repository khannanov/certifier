import React from 'react';
import { CertificationsContainer } from './CertificationsContainer'
import CertificationsList from './components/CertificationsList'
import { shallow } from 'enzyme';
import normalizedMock from '../../../config/normalized.db.mock'

describe('container CertificationsList', () => {
  it('should render without crash', () => {
    shallow(<CertificationsContainer/>);
  })

  it('it should contain CertificationList component', () => {
    const wrapper = shallow(<CertificationsContainer/>)

    expect(wrapper.contains(<CertificationsList
      certifications={normalizedMock.certifications}
    />)).toBeTruthy()
  })
})