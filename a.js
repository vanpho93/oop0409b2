class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//2 cach mo rong. c1 -> tac dong truc tiep 

Person.prototype.sayHello = function() {
    console.log('Xin chao, toi la ' + this.name);
}

const teo = new Person('Teo Nguyen', 10);
const ti = new Person('Ti Nguyen', 10);
const tun = new Person('Tun Nguyen', 10);

ti.sayHello();

// console.log(teo);
// teo.height = 200;
// console.log(teo.height);

// teo.sayHello = function() {
//     console.log('Xin chao, toi la ' + this.name);
// }
// teo.sayHello();
