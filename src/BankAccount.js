class BankAccount {
  constructor(transactions = new Transactions()) {
    this.balance = 0
    this.transactions = transactions
  }
  showBalance() {
    return this.balance
  }

  showTransactions() {
    return this.transactions
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawal(amount) {
    this.balance -= amount; 
  }
}