import 'jest-styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { toSnapshot } from 'react-test-renderer-helper';
import Adapter from 'enzyme-adapter-react-16';
import Index from '../src/index.lib';

Enzyme.configure({ adapter: new Adapter() });

it('Index styled-compoments', () => {
  const comp = renderer.create(<Index />);
  expect(toSnapshot(comp)).toMatchSnapshot();
});

it('Index initAndUnmount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Index updateNoChange', () => {
  const wrapper = shallow(<Index />);
  const firstDebug = wrapper.debug();
  expect(firstDebug).toMatchSnapshot('firstDebug');
  wrapper.update();
  expect(wrapper.debug()).toEqual(firstDebug);
});

// it('Index onClick status snapshots', () => {
//   const wrapper = shallow(<Index />);

//   expect(wrapper.debug()).toMatchSnapshot('init');

//   wrapper.simulate('click');
//   wrapper.simulate('onMouseEnter');
//   expect(wrapper.debug()).toMatchSnapshot('add');
//   expect(wrapper.state()).toMatchSnapshot('add-state');
// });