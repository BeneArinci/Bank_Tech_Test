class Statement {

  printHeader() {
    console.log('date || credit || debit || balance')
  }
  printStatement(transactions) {
    transactions.reverse().forEach(function(transaction){
      if (transaction[0] == 'deposit') {
        console.log(`${transaction[1]} || ${transaction[2]} || || ${transaction[3]}`)
      }
      if (transaction[0] == 'withdrawal') {
        console.log(`${transaction[1]} || || ${transaction[2]} || ${transaction[3]}`)
      }
    });
  }
}