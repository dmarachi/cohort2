import React from 'react';
import ReactDOM from 'react-dom';
import CommunityComp from './CommunityComp.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommunityComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
