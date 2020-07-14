describe("Transactions", function(){
  var transactions;
  beforeEach(function(){
    transactions = new Transactions()
  });
  it("starts with an empty array used to store transactions", function(){
    expect(transactions.showTransactions()).toEqual([])
  });
});