class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static showPerson() {
        console.log(this.name);
    }

    sayHello (){
        console.log('Xin chao, toi la ' + this.name);
    }
}

Person.showPerson();

//static
// let a = String.fromCharCode(65, 66, 67); 
// console.log(a);


// let b = new String('Xin chao');
// console.log(b.replace(' ', '-'));

// let a = new Person('Teo', 10);
// Person.showPerson(a);
