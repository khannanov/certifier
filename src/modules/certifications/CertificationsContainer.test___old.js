import React from 'react';
import ConnectedCertificationsContainer, { CertificationsContainer } from './CertificationsContainer'
import CertificationsList from './components/CertificationsList'
import { shallow, mount } from 'enzyme';
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import { fbs as FirebaseServer } from '../../firebase';

xdescribe('container CertificationsList', () => {
  afterEach(() => {
    FirebaseServer.close( console.log('close server'));
  })

  it('should render without crash', () => {
    shallow(<CertificationsContainer/>);
  })

  it('it should contain CertificationList component', () => {
    const wrapper = shallow(<CertificationsContainer/>)

    expect(wrapper.contains(<CertificationsList
      certifications={{}}
    />)).toBeTruthy()
  })

  it('Connected CertificationsContainer with connect', () => {
    const store = mockStore({})
    const wrapper = shallow(<Provider store={store}>
      <ConnectedCertificationsContainer/>
    </Provider>)

    expect(wrapper.text()).toBe('<Connect(CertificationsContainer) />')
  })
  //
  // fit('mounted CertificationsContainer should have props', () => {
  //   const wrapper = mount(<CertificationsContainer />)
  //
  //     console.log('----', wrapper.props())
  //
  //     expect(wrapper.text()).toBe('')
  //
  // })
})