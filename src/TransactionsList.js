// eslint-disable-next-line no-unused-vars
class TransactionsList {
  constructor() {
    this._transactions = [];
  }

  transactions() {
    return this._transactions;
  }

  saveDeposit(date, value, updatedbalance) {
    var transactiondate = this._getDateString(date);
    this._transactions.push(['deposit', `${transactiondate}`, `${value.toFixed(2)}`, `${updatedbalance.toFixed(2)}`]);
  }

  saveWithdrawal(date, value, updatedbalance) {
    var transactiondate = this._getDateString(date);
    this._transactions.push(['withdrawal', `${transactiondate}`, `${value.toFixed(2)}`, `${updatedbalance.toFixed(2)}`]);
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