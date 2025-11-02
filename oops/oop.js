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

// Encapsulation
class BankAccount {
    #balance = 0         // only methods inside this class can access it. 

    deposit(amount){
        this.#balance += amount
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let myaccount = new BankAccount();
// console.log(myaccount.getBalance());

// Abstraction  -> ignoring the complex things or what's happenning under the hood just provide me the end result.
class CoffeeMachine {
    start (){
        // here it can have bunch of complex logic
        return `starting the machine...`
    }
    brew () {
        // again alot of complex logics
        return `brewing coffee`
    }
    pushButton () {
        let msgone = this.start()
        let msgtwo = this.brew()
        return `${msgone} \n${msgtwo}`
    }}

let mycoffee = new CoffeeMachine();
// console.log(mycoffee.start());
// console.log(mycoffee.brew());
// console.log(mycoffee.pushButton());


// Polymorphism -> one can have many forms like below the method fly have different results in different classes.

class Bird {
    fly(){
        return `flying...`;
    }
}
class Penguin extends Bird {
    fly(){
        return `Penguins can't fly`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());


// static method -> only class can call a static method; nobody else.

class Calculator {
    static add (a, b){
        return a+b
    }
}
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));
// console.log(Calculator.add(2,7));    // only class can call the static method. (you can't create an object of it)

// Getters and Setters
class Employee {
    #salary;
    constructor(name, salary){
        if (salary < 0) {
            throw new Error("Salary cannot be negative.");
        }
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `You are not allowed to see the salary`
    }

    set salary(value){
        if (value < 0) {
            console.error("Invalid Salary");
        } else{
            this._salary = value;
        }
    }

}
let newEmp = new Employee("Alice", -50000);
// console.log(newEmp._salary);
// newEmp.salary = 60000;
