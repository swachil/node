// Main js file

const Payment = require('./payment');
const Sbi = require('./sbi');
const Hdfc = require('./hdfc');

const payment = new Payment();

payment.pay(new Sbi(1000, "102923345"));
payment.pay(new Hdfc(1500, "302923345"));

payment.refund(new Sbi(1000, "102923345"));
payment.refund(new Hdfc(1500, "302923345"));