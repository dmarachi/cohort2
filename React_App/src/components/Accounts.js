import Account from './Account.js';

class Accounts {
	constructor() {
		this.accountList = [];
		this.counter = 0;

	}

	createAccount (accountBalance, accountName, accountID) {
		const newAccount = new Account(accountBalance, accountName, this.counter++);
		this.accountList.push(newAccount);
		console.log("The Array", accountBalance, accountName );
		return this.accountList;

	}

	deleteAccount(accountID) {
		let b = this.findAccount(accountID); // just the way to call back the function
		this.accountList.splice(b, 1);
		return this.accountList; 
		}

	findAccount(i) {
		let x = this.accountList.findIndex(function(e){return e.accountID === i});
		return x; //returns the index of the object
	}

	calculateTotal() {
		let sum = this.accountList.reduce((accumulator, currentValue) => 
			accumulator + currentValue.accountBalance, 0);
		console.log("The total balance is: ", sum);
		return sum;
		// console.log("The total balance is: ", sum);
	}

	returnHighest() {
		if (this.accountList.length > 0) {
			const max = this.accountList.reduce((acc1, acc2) => 
			(acc1.accountBalance > acc2.accountBalance) ? acc1 : acc2);
		return max;
      		// this.state.accountList.returnHighest();
      	 } else {
      		return "No account is entered yet.";
      	}
	}

	returnLowest() {
		if (this.accountList.length >= 1) {
		const min = this.accountList.reduce((acc1, acc2) => 
			(acc1.accountBalance < acc2.accountBalance) ? acc1 : acc2);
		return min;
	} else {
		return "No account is entered yet.";
	}
}
}

export default Accounts;