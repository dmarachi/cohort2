import React from 'react';
import ReactDOM from 'react-dom';
import ListComp from './ListComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
