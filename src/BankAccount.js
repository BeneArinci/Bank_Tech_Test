class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = new Transactions();
    this.statement = new Statement();
  }
  showBalance() {
    return this.balance
  }

  showTransactions() {
    return this.transactions
  }

  deposit(amount, date = new Date()) {
    this.balance += amount;
    this.transactions.saveDeposit(date, amount, this.showBalance())
  } 

  withdrawal(amount, date = new Date()) {
    this.balance -= amount; 
    this.transactions.saveWithdrawal(date, amount, this.showBalance())
  }

  showStatement(transactions = this.transactions.showTransactions()) {
    this.statement.printHeader();
    this.statement.printStatement(transactions);
  }
}