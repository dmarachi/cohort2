import React from 'react';
import ReactDOM from 'react-dom';
import FifoAndLifoComp from './FifoAndLifoComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FifoAndLifoComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
