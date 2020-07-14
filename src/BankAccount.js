class BankAccount {
  constructor() {
    this.balance = 0
    this.transactions = []
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