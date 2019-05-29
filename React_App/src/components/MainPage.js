import React, { Component } from 'react';
import logo from './logo.svg';
import './MainPage.css';

class MainPage extends Component {
  
  render() {
    return (
      
      <div className="App">
      <h1> Hello, Dima! </h1>
       <header className="App-header">
        <div>
        
        </div>
       <img src={logo} className="App-logo" alt="logo" />
       </header>
      </div>
    );
  }
}

export default MainPage;