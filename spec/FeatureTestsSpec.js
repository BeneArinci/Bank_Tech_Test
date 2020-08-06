/* eslint-disable no-undef */
describe('FeatureTests', function() {
  var bankaccount;
  var moneybankaccount;
  var date1;
  var date2;

  beforeEach(function(){
    bankaccount = new BankAccount();
    moneybankaccount = new BankAccount(2000);
    date1 = new Date(2020, 0, 12);
    date2 = new Date(2020, 0, 13);
  });
  describe('deposit', function(){
    it('when a deposit is done, transactions is storing it', function(){
      bankaccount.deposit(1000, date1);
      expect(bankaccount.transactionsList.transactions()).toContain(['deposit', '12/01/2020', '1000.00', '1000.00']);
    });
    it('when multiple deposits are done, transactions is storing them', function(){
      bankaccount.deposit(1000, date1);
      bankaccount.deposit(500, date2);

      expect(bankaccount.transactionsList.transactions().length).toEqual(2);
      expect(bankaccount.transactionsList.transactions()[0]).toEqual(['deposit', '12/01/2020', '1000.00', '1000.00']);
      expect(bankaccount.transactionsList.transactions()[1]).toEqual(['deposit', '13/01/2020', '500.00', '1500.00']);
    });
  });

  describe('withdrawal', function(){
    it('when a withdrawal is done, transactions is storing it', function(){
      moneybankaccount.withdrawal(1000, date1);
      console.log(moneybankaccount.transactionsList.transactions())
      expect(moneybankaccount.transactionsList.transactions()).toContain(['withdrawal', '12/01/2020', '1000.00', '1000.00']);
    });
    it('when multiple withdrawals are done, transactions is storing them', function(){
      moneybankaccount.withdrawal(1000, date1);
      moneybankaccount.withdrawal(300, date2);

      expect(moneybankaccount.transactionsList.transactions().length).toEqual(2);
      expect(moneybankaccount.transactionsList.transactions()[0]).toEqual(['withdrawal', '12/01/2020', '1000.00', '1000.00']);
      expect(moneybankaccount.transactionsList.transactions()[1]).toEqual(['withdrawal', '13/01/2020', '300.00', '700.00']);
    });
  });
  
});