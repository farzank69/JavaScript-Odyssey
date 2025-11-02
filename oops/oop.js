car = {
    name: "Toyota",
    type: "Camry",
    model: 2023,
    start: function(){
        return `${this.name} has been started`
    }
}
// console.log(car.start());

// Constructor function

function Person(name, age){
    this.name = name
    this.age = age
}
let john = new Person("John Marston", 30);  // object/instance of the constructor function.
// console.log(john.name);

function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound.`;
};

Array.prototype.farzan = function(){       // creating my own custom method on whole array
    return `Custom method ${this}`;
};

// prototype chain 
let newarr = [1,2,3]
// console.log(newarr.farzan());
let mynewarr = [1,2,3,8,9,5]
// console.log(mynewarr.farzan());


// Class based Constructor

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
// Inheritance
class Car extends Vehicle {
    drive(){
        return `${this.make}: This is an inheritance example.`
    }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());
