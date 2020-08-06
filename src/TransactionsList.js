// eslint-disable-next-line no-unused-vars
class TransactionsList {
  constructor() {
    this._transactions = [];
  }

  transactions() {
    return this._transactions;
  }

  saveDeposit(date, value, updatedbalance) {
    var transactiondate = this._formattingDate(date);
    this._transactions.push(['deposit', `${transactiondate}`, `${value.toFixed(2)}`, `${updatedbalance.toFixed(2)}`]);
  }

  saveWithdrawal(date, value, updatedbalance) {
    var transactiondate = this._formattingDate(date);
    this._transactions.push(['withdrawal', `${transactiondate}`, `${value.toFixed(2)}`, `${updatedbalance.toFixed(2)}`]);
  }

  _formattingDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    return `${day}/${month.toString().padStart(2, '0')}/${year}`;
    
  }
}