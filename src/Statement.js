// eslint-disable-next-line no-unused-vars
class Statement {

  printHeader() {
    console.log('date || credit || debit || balance');
  }
  printStatement(transactions) {
    transactions.reverse().forEach(function(transaction){
      console.log(this._formatTransactions(transaction));
    }.bind(this));
  }

  _formatTransactions(transaction) {
    if (transaction[0] == 'deposit') {
      return (`${transaction[1]} || ${transaction[2]} || || ${transaction[3]}`);
    }
    if (transaction[0] == 'withdrawal') {
      return (`${transaction[1]} || || ${transaction[2]} || ${transaction[3]}`);
    }
  }
}