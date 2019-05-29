import React from 'react';
import ReactDOM from 'react-dom';
import AccountsComp from './AccountsComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
