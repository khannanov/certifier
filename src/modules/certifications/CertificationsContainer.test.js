import React from 'react';
import ConnectedCertificationsContainer, { CertificationsContainer } from './CertificationsContainer'
import CertificationsList from './components/CertificationsList'
import { shallow, mount } from 'enzyme';
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';

import { fbs as FirebaseServer } from '../../firebase';

describe('container CertificationsList', () => {
  afterEach(() => {
    FirebaseServer.close( console.log('close server'));
  })

  xit('should render without crash', () => {
    shallow(<CertificationsContainer/>);
  })

  xit('it should contain CertificationList component', () => {
    const wrapper = shallow(<CertificationsContainer/>)

    expect(wrapper.contains(<CertificationsList
      certifications={{}}
    />)).toBeTruthy()
  })
})