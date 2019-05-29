import React, {Component} from 'react';
import Accounts from './Accounts.js';
import './Account.css';
import AccountComp from './AccountComp';

class AccountsComp extends Component {
	constructor() {
		 super() 
		 this.state = {
		 	sum: 0,
		 	highest: 0,
		 	lowest: 0,
		 	accountController: new Accounts(),
		 	newAccount: false,
		 	inputName: "",
		 	inputBalance: 0,
		 }
	}
	componentDidMount() {
		this.accountController = this.state.accountController;
		this.setState({accountController: this.accountController});
		console.log("Component did mount");
	}

	createNewAccount = () => {
		this.accountController.createAccount(Number(this.state.inputBalance), this.state.inputName);
		console.log("The input name is: ", this.state.inputName, "The input balance is: ", this.state.inputBalance);
		console.log("The array: ", this.accountController);
		this.setState({});
		this.getStats();
		this.setState({accountController: this.accountController});
	}

	getTotal = () => {
		let sum = this.accountController.calculateTotal();
		console.log("The total ", sum );
		this.setState({sum: sum});
		return sum;
		// console.log("The total for the get total is ", sum );
	}

	getHighest = () => {
		let highest = this.accountController.returnHighest();
		console.log("The highest number is: ", highest);
		this.setState({highest: highest});
		return highest;
	}

	getLowest = () => {
		let lowest = this.accountController.returnLowest();
		console.log("The lowest number is: ", lowest);
		this.setState({lowest: lowest});
		return lowest;
	}

	getStats = () => {
		this.getTotal();
		this.getHighest();
		this.getLowest();
	}

	removeAccount = (accountID) => {
		this.accountController.deleteAccount(accountID);
		this.setState({accountController: this.accountController});
		this.getStats();
	}

	handleChange = (event) => {
		const {name , value} = event.target;
		this.setState({[name]: value});
	}

	render(){
		const list = this.state.accountController.accountList.map((a , b) => {
			return <AccountComp key = {b}
								accountName = {this.state.accountController.accountList[b].accountName}
								accountBalance = {this.state.accountController.accountList[b].accountBalance}
								accountID = {this.state.accountController.accountList[b].accountID}
								removeAccount = {(accountID) => this.removeAccount(accountID)} //this needs to be reviewed not working correctly
								// removeAccount = {(accountID) => this.removeAccount(this.state.accountController.accountList[b].accountID)}
								/>
		});
		return (
			<div> 
			<h1> Hello, from Accounts! </h1>
			<br /><br />
			<div >
			{/* <button2 type = 'button' 
					 id = 'newAccount' >Add New Account</button2> {/*name = 'new'*/}
			<div> 
          
            <input  
            		id = 'initialName'
                    type = 'text' 
                    placeholder = 'Name' 
                    name = 'inputName' 
                    onChange = {this.handleChange}
            />&nbsp;&nbsp;
            <input   
            		id = 'initialBalance'
                    type = 'number' 
                    placeholder = 'Balance' 
                    name = 'inputBalance' 
                    onChange = {this.handleChange}
            />&nbsp;&nbsp;
            
            <button type = 'button' 
            		id = 'okAddNewAccount'
            		onClick ={this.createNewAccount} > OK </button>
            </div> 
            <div >

             <h2> {list} </h2>
             <h2>The Total Balance is: ${this.state.sum} </h2>
			 <h2 class = "left-half">The Maximum Value is <br /><br />
				Account Name:    {this.state.highest.accountName}&nbsp;
				Account Balance: ${this.state.highest.accountBalance}</h2>
      		
      		<h2 class = "right-half">The Minimum Value is <br /><br /> 
      			Account Name: {this.state.lowest.accountName} &nbsp;
      			Account Balance: ${this.state.lowest.accountBalance}</h2>
            </div>
			</div>
			</div>
			)
	}
}
export default AccountsComp;