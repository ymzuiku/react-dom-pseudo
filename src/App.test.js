import 'jest-styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { toSnapshot, clearStatus } from 'react-test-renderer-helper';
import App from './App';

beforeEach(() => {
  clearStatus('*');
});

test('App 启动不崩溃', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App 初始化渲染快照', () => {
  const comp = renderer.create(<App bb={20} />);
  expect(toSnapshot(comp)).toMatchSnapshot('render');
});

