const {
    lock,
    unlock
} = require('./proxydesignpattern');

const password = 'Green123$';

const obj = {
    name: 'Swachil',
    age: 29,
    city: 'Bharuch',
    country: 'India'
};

const personDetails = lock(obj, password);
personDetails.state = 'Gujarat';
console.log(personDetails);

const unlockPersonDetails = unlock(personDetails, password);
// unlockPersonDetails.hobby = 'Cricket';
console.log(unlockPersonDetails);