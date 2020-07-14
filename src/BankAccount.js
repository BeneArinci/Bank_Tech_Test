class BankAccount {
  constructor(balance = 0) {
    this.balance = balance
    this.transactions = new Transactions()
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
}