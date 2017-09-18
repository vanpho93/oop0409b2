class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sayHello = function(){
            console.log('Xin chao, toi la ' + this.name);
        }
    }
}