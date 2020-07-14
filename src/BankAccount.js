class BankAccount {
  constructor() {
    this.balance = 0
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
    var updatedbalance = this.showBalance()
    this.transactions.saveDeposit(date, amount, updatedbalance)
  } 

  withdrawal(amount) {
    this.balance -= amount; 
  }
}