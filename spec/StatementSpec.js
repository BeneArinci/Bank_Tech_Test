/* eslint-disable no-undef */
describe("Transactions", function(){
  var statement;
  var transactions;


  beforeEach(function(){
    statement = new Statement()
    transactions = {
      getTransactions: function() {
        return [['deposit', '12/01/2020', '1000', '1000'], ['deposit', '13/01/2020', '1000', '2000'], ['withdrawal', '14/01/2020', '1000', '1000']];
      }
    };

  });
  it ('prints header', function() {
    spyOn(console, 'log');
    statement.printHeader();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });

  it ('prints out transactions', function() {
    spyOn(console, 'log');
    console.log(transactions.getTransactions())
    statement.printStatement(transactions.getTransactions())
    expect(console.log).toHaveBeenCalledWith([['deposit', '12/01/2020', '1000', '1000'], ['deposit', '13/01/2020', '1000', '2000'], ['withdrawal', '14/01/2020', '1000', '1000']])
  })

  // it('prints out the transactions in the right format', function(){
  //   statement.printHeader();
  //   statement.printStatement(transactions.getTransactions());
  //   //expect(statement.print(transactions.getTransactions())).toEqual('x')
  // });
//   it( "Expect foo to greet", () => {

//     //This makes the log visible again from the command line.
//     spyOn(console, 'log').and.callThrough();

//     expect(foo("World", true)).toBe("Hello World");
// });
  
  
  
});