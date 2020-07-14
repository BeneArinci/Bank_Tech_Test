class Transactions {
  constructor() {
    this.transactions = [];
  }

  showTransactions() {
    return this.transactions;
  }

  saveDeposit(date = new Date, value, updatedbalance) {
    var transactiondate = this._getDateString(date);
    this.transactions.push(['deposit', `${transactiondate}`, `${value}`, `${updatedbalance}`]);
  }

  saveWithdrawal(date = new Date, value, updatedbalance) {
    var transactiondate = this._getDateString(date);
    this.transactions.push(['withdrawal', `${transactiondate}`, `${value}`, `${updatedbalance}`]);
  }

  _getDateString(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}