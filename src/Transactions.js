// eslint-disable-next-line no-unused-vars
class Transactions {
  constructor() {
    this.transactions = [];
  }

  showTransactions() {
    return this.transactions;
  }

  saveDeposit(date, value, updatedbalance) {
    var transactiondate = this._getDateString(date);
    this.transactions.push(['deposit', `${transactiondate}`, `${value}`, `${updatedbalance}`]);
  }

  saveWithdrawal(date, value, updatedbalance) {
    var transactiondate = this._getDateString(date);
    this.transactions.push(['withdrawal', `${transactiondate}`, `${value}`, `${updatedbalance}`]);
  }

  _getDateString(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (this._getMonthLength(month)) {
      return `${day}/0${month}/${year}`;
    }
      return `${day}/${month}/${year}`;
  }

  _getMonthLength(month) {
    return month.toString().length === 1;
  }
}