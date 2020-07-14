
#### MY PROJECT
I have worked on this project as an assignment given to me by Makers.
The idea was to create a bank account program that is enabling a user to:
- open a bank account;
- do money deposit and withrawal 
- print their bank statement in the following format:
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

In order to do so I have worked on the following user stories:
```
As a customer,
so that I can keep my money safe and use it whenever I want
I would like to be able to open a bank account.
```
```
As a customer, 
so that I can transfer money to my bank account
I would like to be able to make a deposit
```
```
As a customer,
so that I can use my money in my bank account
I would like to be able to make a withdrawal
```
```
As a customer,
so that I can know when my transactions happened
I would like them to store the actual transaction time
```
```
As a customer,
so that I can know what my bank account status is
I would like to be able to print an bank account statement
```

#### PROJECT SETUP
I used **Jasmine** as a testing framework and **ESLint** as a code linter.

To install Jasmine:
- download the latest version of Jasmine Stand Alone from: https://github.com/jasmine/jasmine/releases 
- unzip the file and copy the content inside the working directory
- modify the SpecRunner.html file and the files inside the src and spec folders accordingly
To install ESLint for VSC:
- download the extension and follow the indicated procedure

To make sure that ESLint is collaborating with Jasmine spec files, in the ESlint.json file make sure you indicate the following:
    "env": {
        "browser": true,
        "es2020": true,
        "jasmine": true
    },



