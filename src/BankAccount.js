/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class BankAccount {
  constructor(balance = 0, transactionsList = new TransactionsList(), statement = new Statement()) {
    this._balance = balance;
    this.transactionsList = transactionsList;
    this.statement = statement;
  }
  balance() {
    return this._balance;
  }

  deposit(amount, date = new Date()) {
    this._balance += amount;
    this.transactionsList.saveDeposit(date, amount, this.balance());
  } 

  withdrawal(amount, date = new Date()) {
    this._balance -= amount; 
    this.transactionsList.saveWithdrawal(date, amount, this.balance());
  }

  showStatement(transactions = this.transactionsList._transactions) {
    this.statement.printHeader();
    this.statement.printStatement(transactions);
  }
}