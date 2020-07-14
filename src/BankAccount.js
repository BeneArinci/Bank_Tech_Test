class BankAccount {
  constructor() {
    this.balance = 0
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