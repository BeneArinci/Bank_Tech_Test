describe('BankAccount', function() {
  var bankaccount;
  beforeEach(function(){
    bankaccount = new BankAccount();
  });

  it('has an empty balance by default', function(){
    expect(bankaccount.showBalance()).toEqual(0);
  });
}); 
