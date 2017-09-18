class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayGoodbye() {
        console.log('Tam biet');
    }

    sayHello(){
        console.log('Xin chao, toi la ' + this.name);
    }
}

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }
    sayHello() {
        super.sayHello();
        console.log('Xin chao, em la ' + this.name + ' em thich choi ' + this.toy);
    }
}

const teo = new Child('Teo Nguyen', 10, 'May bay');
teo.sayHello();
teo.sayGoodbye();