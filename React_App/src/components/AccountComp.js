import React from 'react';
import Account from './Account.js';
import './Account.css';
import withdraw from './withdraw.png';
import deposit from './deposit.png';
import trash from './trash.png';

// const account = new Account(100, "Dima Account", 1);

class AccountComp extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          account: '',
          inputValue: '',
        }
        console.log("The props are: ", this.props);
      }

      componentDidMount() {
        // console.log(props);
        this.account = new Account(this.props.accountBalance, this.props.accountName, this.props.accountID);
        this.setState({account: this.account});
      }

      handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

      withdraw = () => {
        let x = Number(this.state.input);
        // console.log("The input Value is: ", x);
        this.account.withdraw(x);
        this.setState({account: this.account});
        console.log("The input Value to withdraw is: ", x);
      }

       deposit = () => {
        let x = Number(this.state.input);
        console.log("The input Value to deposit is: ", x);
        this.account.deposit(x);
        this.setState({account: this.account});
      }

      remove = () => {
        this.props.removeAccount(this.account.accountID);
        return this.account.accountID;
      }

      render() {
      	return (
      		<div > <h1> Hello, from Account! </h1>
      		<br /><br />
      		<div > {/*class = "accountBalanceCard"*/}
      	    <h2>{this.state.account.accountName} </h2>
            <h3>{this.state.account.accountBalance} </h3>
            <input  className = 'balance' 
            		    id = 'inputValue'
                    type = 'number' 
                    placeholder = 'balance' 
                    name = 'input' //The name is to call the functions withdraw and deposit
                    onChange = {this.handleChange} 
            />
            <br /><br />
             <button>
                 <img src={withdraw} 
                      id = 'withdraw' 
                      alt= "withdraw" 
                      className = "Open_Book" 
                      name = 'withdraw' 
                      onClick = {this.withdraw}  /> 
             </button> &nbsp;&nbsp;&nbsp;&nbsp;
             <button>
                 <img src={deposit} 
                      id = 'deposit' 
                      alt= "deposit" 
                      className = "Open_Book" 
                      name = 'deposit' 
                      onClick = {this.deposit} /> 
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button>
                 <img src={trash} 
                      id = 'remove' 
                      alt= "remove" 
                      className = "Open_Book" 
                      name = 'remove' 
                      onClick = {this.remove} /> 
                </button>
      		</div>
      		</div>


      		);
      }
};

export default AccountComp;
