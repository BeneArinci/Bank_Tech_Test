describe("Transactions", function(){
  var transactions;
  var bankaccount;
  var date1;
  var date2;

  beforeEach(function(){
    transactions = new Transactions()
    bankaccount = {
      setBalance: function(value) {
        balance = value;
      },
      getBalance: function() {
        return balance;
      }
    };
    date1 = new Date(2020, 0, 12)
    date2 = new Date(2020, 0, 13)
  });
  
  
  it("starts with an empty array used to store transactions", function(){
    expect(transactions.showTransactions()).toEqual([])
  });

  it("saves info regarding a deposit", function(){
    spyOn(bankaccount, "getBalance").and.returnValue(1000)
    transactions.saveDeposit(date1, 1000, bankaccount.getBalance())
    expect(transactions.showTransactions()).toContain(['deposit', '12/1/2020', '1000', '1000'])
  });

  it("saves info regarding a withdrawal", function(){
    spyOn(bankaccount, "getBalance").and.returnValue(700)
    transactions.saveWithdrawal(date2, 300, bankaccount.getBalance())
    expect(transactions.showTransactions()).toContain(['withdrawal', '13/1/2020', '300', '700'])
  });
});