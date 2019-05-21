import React from 'react';
import HomePage from "./HomePage.gif";
import CalculatorColored from './CalculatorColored.png';
import MathComp from './components/MathComp.js';
import AccountComp from './components/AccountComp.js';
import account from './account.png';
import boxes_In_Out from "./boxes_In_Out.jpg";
import FifoAndLifoComp from "./components/FifoAndLifoComp.js";
import Urban_Planning from "./Urban_Planning.png";
import credit_card from './credit_card.png';
import AccountsComp from './components/AccountsComp.js';
import MainPage from './components/MainPage.js';
import CommunityComp from './components/CommunityComp.js';
import ListComp from './components/ListComp.js';
import Checklist_icon from "./Checklist_icon.png";

import './App.css';

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    imageValue: null,
    balance: 0,
    
  };
  this.clickHandler = this.clickHandler.bind(this);
}
//sets the state.name to the 'id' of the button clicked
  clickHandler(event) {
  
    if (event.target.id === 'calculator') {
     this.setState({imageValue:<MathComp />});
      console.log("Calculater is clicked");
     } else if (event.target.id === 'account') {
      this.setState({imageValue:<AccountComp accountBalance = {this.state.balance} accountName = "oooooooooo" />})
      console.log("Account is clicked");
     } else if (event.target.id === 'accounts') {
      this.setState({imageValue:<AccountsComp />})
      console.log("Accounts is clicked");
     } else if (event.target.id === 'mainPage') {
      this.setState({imageValue:<MainPage />})
      console.log("Main Page is clicked");
     } else if (event.target.id === 'CommunityComp') {
      this.setState({imageValue:<CommunityComp /> })
      console.log("City is clicked");
     } else if (event.target.id === 'ListComp') {
      this.setState({imageValue:<ListComp /> })
      console.log("Linked List is clicked");
     } else if (event.target.id === 'FifoAndLifoComp') {
      this.setState({imageValue:<FifoAndLifoComp /> })
      console.log("Linked List is clicked");
     }
  }
  render() {
      return (
      <div>
      <div onClick = {this.clickHandler} > 
      <button>
        <img src={HomePage} id = 'mainPage' alt= "HomePage" className = "Open_Book"/> {/*//*/}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button >
        <img src={CalculatorColored} id = 'calculator'  alt= "CalculatorColored" className = "Calculator" /> {/**/}
         </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>
        <img src={account} id = 'account' alt= "account" className = "Open_Book"/> {/*//*/}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button>
        <img src={Urban_Planning} id = 'CommunityComp' alt= "Urban_Planning" className = "Calculator"/> {/*//*/}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button>
        <img src={credit_card} id = 'accounts' alt= "credit_card" className = "Calculator"/> {/*//*/}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>
        <img src={Checklist_icon} id = 'ListComp' alt= "Checklist_icon" className = "Calculator"/> {/*//*/}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>
        <img src={boxes_In_Out} id = 'FifoAndLifoComp' alt= "boxes_In_Out" className = "Calculator"/> {/*//*/}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </div>
         <div>
          {this.state.imageValue}
          </div>
      </div>
     
    );
  }
}
export default Icons;
