// eslint-disable-next-line no-unused-vars
class Statement {

  printHeader() {
    console.log('date || credit || debit || balance');
  }
  printStatement(transactions) {
    this._getTransactionsList(transactions).forEach(function(transaction){
      console.log(transaction);
    });

  }

  _getTransactionsList(transactions) {
    var transactionsList = []
    transactions.reverse().forEach(function(transaction){
      if (transaction[0] == 'deposit') {
        transactionsList.push(`${transaction[1]} || ${transaction[2]} || || ${transaction[3]}`);
      }
      if (transaction[0] == 'withdrawal') {
        transactionsList.push(`${transaction[1]} || || ${transaction[2]} || ${transaction[3]}`);
      }
    });
    console.log(transactions)
    console.log(transactionsList)
    return transactionsList;
  }
}