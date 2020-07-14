describe('FeatureTests', function() {
  var bankaccount;
  var transactions;
  var date1;
  var date2;

  beforeEach(function(){
    bankaccount = new BankAccount();
    date1 = new Date(2020, 0, 12);
    date2 = new Date(2020, 0, 13)
  });
  describe('deposit', function(){
    it('when a deposit is done, transactions is storing it', function(){
      bankaccount.deposit(1000, date1);
      expect(bankaccount.transactions.showTransactions()).toContain(['deposit', '12/01/2020', '1000', '1000'])
    });
    it('when multiple deposits are done, transactions is storing them', function(){
      bankaccount.deposit(1000, date1);
      bankaccount.deposit(500, date2);

      console.log(bankaccount.transactions.showTransactions()[1])
      expect(bankaccount.transactions.showTransactions().length).toEqual(2)
      expect(bankaccount.transactions.showTransactions()[0]).toEqual(['deposit', '12/01/2020', '1000', '1000'])
      expect(bankaccount.transactions.showTransactions()[1]).toEqual(['deposit', '13/01/2020', '500', '1500'])
    });
  });
});