import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import Header from './Header';

describe('testing Layout', () => {
  const children = <div>children text</div>;
  const wrapper = shallow(<Layout>{children}</Layout>);

  it('renders with children without crashing', () => {
    expect(wrapper.contains(children)).toBeTruthy();
  });

  it('contain header component', () => {
    expect(wrapper.contains(<Header />)).toBeTruthy();
  });
});