// Main app.
const Login = require('./Login');
const Validation = require('./Validation');
const MoneyTransfer = require('./MoneyTransfer');

const user = {
    username: 'Swachil',
    password: 'green123$'
};

console.log('Trying to login');
Validation.validate(user);
Login.login('Swachil', 'green123$');
MoneyTransfer.upi('Ronak', 1500);
Login.logout();