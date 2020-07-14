describe('BankAccount', function() {
  var bankaccount;
  beforeEach(function(){
    bankaccount = new BankAccount();
  });

  it('has an empty balance by default', function(){
    expect(bankaccount.showBalance()).toEqual(0);
  });

  it('has an empty transactions array by default', function(){
    expect(bankaccount.showTransactions()).toEqual([]);
  });

  describe('deposit', function(){
    beforeEach(function(){
      bankaccount.deposit(1000);
    });
    it('increases the value of the current balance by the deposit value', function(){
      expect(bankaccount.showBalance()).toEqual(1000);
    });
  });

  describe('withdrawal', function(){
    beforeEach(function(){
      bankaccount.deposit(1000);
      bankaccount.withdrawal(500);
    });
    it('decreases the balance by the withdrawal value', function(){
      expect(bankaccount.showBalance()).toEqual(500);
    });
  })
  
}); 
