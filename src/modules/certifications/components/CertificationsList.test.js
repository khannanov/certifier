import React from 'react';
import { shallow } from 'enzyme';
import CertificationList from './CertificationsList';
import storeMock from '../../../../config/normalized.db.mock';

describe('component CertificationsList', () => {
  it('renders certifications when passed in', () => {
    const { certifications } = storeMock;
    const wrapper = shallow(<CertificationList certifications={certifications}/>);

    expect(wrapper.find('ul').length).toBe(1);
  })
})
