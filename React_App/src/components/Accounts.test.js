import Accounts from "./Accounts.js";
import Account from "./Account.js";

test('Test the accounts class', () => {

	const accounts = new Accounts;
	expect(accounts.createAccount(25, "shane", 0)).toEqual([{accountBalance: 25,accountName: "shane", accountID: 0}]);
	expect(accounts.calculateTotal()).toEqual(25);
	expect(accounts.createAccount(36, "eva", 1)).toEqual([{accountBalance: 25, accountName: "shane", accountID: 0}, 
													  {accountBalance: 36, accountName: "eva", accountID: 1}]);

	//to test the calculate value of the value
	expect(accounts.calculateTotal()).toEqual(61);
	
	//to test the highest value
	expect(accounts.returnHighest()).toEqual({accountBalance: 36, accountName: "eva", accountID: 1});
	//to test the lowest value
	expect(accounts.returnLowest()).toEqual({accountBalance: 25,accountName: "shane", accountID: 0});
	
	//to test the find account function
	expect(accounts.findAccount(0)).toEqual(0);
	expect(accounts.findAccount(1)).toEqual(1);

	//to test the delete "Trash"
	expect(accounts.deleteAccount(2)).toEqual([{accountBalance: 25, accountName: "shane", accountID: 0}]);
	expect(accounts.deleteAccount(1)).toEqual([]);
});