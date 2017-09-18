// Loi vs Biet Le//  error vs exception
try {
    console.log(a);
} catch(error) {
    console.log(error);
}

console.log(10);

class Person {
    constructor(name, age, balance) {
        this.name = name;
        if (age < 0) {
            throw new Error('Tuoi khong duoc am');
        }
        this.age = age;        
    }
}

// const a = new Person('teo', -10);
