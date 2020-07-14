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

  deposit(cash) {
    this.balance += cash;
  }
}