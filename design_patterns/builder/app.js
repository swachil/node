// Builder design pattern

class User {
    constructor() {
        this.name = undefined;
        this.number = undefined;
        this.state = undefined;
        this.city = undefined;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setNumber(number) {
        this.number = number;
        return this;
    }

    setState(state) {
        this.state = state;
        return this;
    }

    setCity(city) {
        this.city = city;
        return this;
    }
}

const user = new User().setName('Swachil').setNumber('9586961585').setState('Gujarat').setCity('Bharuch');
console.log(user);

const user1 = new User().setName('Test').setNumber('1234567890');
console.log(user1);