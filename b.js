const a = 'Hello World 123';
console.log(a.replace(' ', '-'));

String.prototype.replaceAll = function(a, b) {
    // str.includes -> boolean
    let self = this;
    while(self.includes(a)) {
        self = self.replace(a, b);
    }
    return self;
};

console.log(a.replaceAll(' ', '_')); //Hello-World-123
