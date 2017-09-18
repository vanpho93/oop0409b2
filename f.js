class Person {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.getBalance = () => balance;
        this.setBalance = (newBalance) => {
            if(newBalance < 0) {
                throw new Error('Balance must be bigger than 0')
            }
            balance = newBalance;
        };
    }

    get birthYear() {
        return 2017 - this.age;
    }

    set birthYear(value) {
        this.age = 2017 - value;
    }
}

const teo = new Person('Teo nguyen', 10, 100);

console.log(teo.getBalance());
teo.setBalance(-1000);
console.log(teo.getBalance());

// console.log(teo.birthYear);
// teo.birthYear = 2010;
// console.log(teo);

