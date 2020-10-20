// Different service classes

const Bank = require('./bank');

class Hdfc extends Bank {
    processPayment() {
        console.log(`Amount payment of ${this.amount} for ${this.account} has been processed by HDFC.`);
    }
    processRefund() {
        console.log(`Amount refund of ${this.amount} for ${this.account} has been processed by HDFC.`);
    }
}

module.exports = Hdfc;