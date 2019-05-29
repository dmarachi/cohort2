import Account from "./Account";

//All this values from the competencies 140 for the test

it('Test the account class', () => {

    // const account = new Account(balance, accountName);
    const account = new Account(25, "savingsAccount");
    expect(account.accountName).toBe("savingsAccount");
    expect(account.getName()).toBe("savingsAccount");
    // expect(account.getID()).toBe(0);
    expect(account.balanceReturn()).toBe(25);
    // expect(account.accountID).toBe(0);
    expect(account.balanceReturn()).toBe(25);
    account.deposit(10);
    expect(account.balanceReturn()).toBe(35);
    account.withdraw(10);
    expect(account.balanceReturn()).toBe(25);
    account.deposit(100);
    expect(account.balanceReturn()).toBe(125);

});

// test("Test for blank object", () => {
//     const account = new Account();
//     expect(account.balanceReturn()).toBe(0);
//     expect(account.accountName).toBe("No Name");
//     expect(account.accountID).toBe(0);
//     account.deposit(20);
//     expect(account.balanceReturn()).toBe(20);
// })