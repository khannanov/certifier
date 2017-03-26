import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  const wrapper = shallow(<Header />);
  it('renders without crash', () => {
    expect(wrapper.length).toBeTruthy();
  });

});