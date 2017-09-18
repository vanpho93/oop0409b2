class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sayHello = function(){
            console.log('Xin chao, toi la ' + this.name);
        }
    }
}

//2 cach mo rong. c1 -> tac dong truc tiep 
// Person.prototype.sayHello = function() {
//     console.log('Xin chao, toi la ' + this.name);
// }

Person.prototype.weight = 100;

const teo = new Person('Teo Nguyen', 10);
const ti = new Person('Ti Nguyen', 10);
const tun = new Person('Tun Nguyen', 10);

ti.sayHello();
console.log(ti.weight);

// console.log(teo);
// teo.height = 200;
// console.log(teo.height);

// teo.sayHello = function() {
//     console.log('Xin chao, toi la ' + this.name);
// }
// teo.sayHello();
