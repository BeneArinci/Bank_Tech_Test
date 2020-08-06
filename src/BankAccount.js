/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class BankAccount {
  constructor(balance = 0, transactionsList = new TransactionsList(), statement = new Statement()) {
    this.balance = balance;
    this.transactions = transactionsList;
    this.statement = statement;
  }
  showBalance() {
    return this.balance;
  }

  showTransactions() {
    return this.transactions;
  }

  deposit(amount, date = new Date()) {
    this.balance += amount;
    this.transactions.saveDeposit(date, amount, this.showBalance());
  } 

  withdrawal(amount, date = new Date()) {
    this.balance -= amount; 
    this.transactions.saveWithdrawal(date, amount, this.showBalance());
  }

  showStatement(transactions = this.transactions.showTransactions()) {
    this.statement.printHeader();
    this.statement.printStatement(transactions);
  }
}