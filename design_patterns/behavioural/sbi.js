// Different service classes

const Bank = require('./bank');

class Sbi extends Bank {
    processPayment() {
        console.log(`Amount payment of ${this.amount} for ${this.account} has been processed by SBI.`);
    }
    processRefund() {
        console.log(`Amount refund of ${this.amount} for ${this.account} has been processed by SBI.`);
    }
}

module.exports = Sbi;