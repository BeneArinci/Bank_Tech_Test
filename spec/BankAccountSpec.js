/* eslint-disable no-undef */
describe('BankAccount', function() {
  var bankaccount;
  var transactionsList;
  var statement;
  beforeEach(function(){
    transactionsList = jasmine.createSpyObj('transactionsList',['saveDeposit','saveWithdrawal']);
    statement = jasmine.createSpyObj('statement', ['printHeader', 'printStatement'])
    bankaccount = new BankAccount(0, transactionsList, statement);
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
    it('calls saveDeposit method in transactionsList class', function(){
      expect(transactionsList.saveDeposit).toHaveBeenCalled();
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
    it('calls saveWithdrawal method in transactionsList class', function(){
      expect(transactionsList.saveWithdrawal).toHaveBeenCalled();
    });
  });

  describe('showStatement', function(){
    beforeEach(function(){
      bankaccount.showStatement()
    });
    it('calls the printHeader method from statment class', function(){
      expect(statement.printHeader).toHaveBeenCalled();
    });
    it('calls the printStatement method from statment class', function(){
      expect(statement.printStatement).toHaveBeenCalled();
    });
  });
  
}); 
