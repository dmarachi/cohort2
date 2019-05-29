
class Account {
	constructor(accountBalance, accountName, accountID) {
		this.accountBalance = accountBalance;
		this.accountName = accountName;
		this.accountID = accountID;
		console.log("Accout name is: ", accountName, "balance: " , accountBalance);
	}

	getName() {
		return this.accountName;
	}

	getID() {
		console.log("AccountID is: ", this.accountID);
		return this.accountID;
	}

	deposit(amount) {
		this.accountBalance += amount;
	}

	withdraw(amount) {
		this.accountBalance -= amount;
	}

	balanceReturn() {
		return this.accountBalance;
	}
}

export default Account;
