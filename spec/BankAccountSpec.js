/* eslint-disable no-undef */
describe('BankAccount', function() {
  var bankaccount;
  beforeEach(function(){
    bankaccount = new BankAccount();
  });

  it('has an empty balance by default', function(){
    expect(bankaccount.balance()).toEqual(0);
  });

  describe('deposit', function(){
    beforeEach(function(){
      bankaccount.deposit(1000);
    });
    it('increases the value of the current balance by the deposit value', function(){
      console.log(bankaccount.balance())
      expect(bankaccount.balance()).toEqual(1000);
    });
  });

  describe('withdrawal', function(){
    beforeEach(function(){
      bankaccount.deposit(1000);
      bankaccount.withdrawal(500);
    });
    it('decreases the balance by the withdrawal value', function(){
      expect(bankaccount.balance()).toEqual(500);
    });
  })
  
}); 
