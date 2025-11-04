// objects inherit properties and methods directly from other objects through a prototype chain
function Person(name){
    this.name = name
}

Person.prototype.greet = function () {
    console.log(`Hello, This is ${this.name}`);
}

let farzan = new Person("farzan");
farzan.greet();
