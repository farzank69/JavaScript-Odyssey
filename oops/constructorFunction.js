function Person(name, age){
    this.name = name
    this.age = age
}
// Constructor function with uppercase name
function Car(make, model){
    this.make = make
    this.model = model
}

// instance of the functional constructor using the new keyword.
let newCar = new Car("Toyota", "Camry");
// console.log(newCar);

let myCar = new Car("Toyota", "Land Cruiser");
// console.log(myCar);

function Pet(type){
    this.type = type
    this.describe = function(){
        return `This pet is a ${this.type}`
    }
}
let myPet = new Pet("Labrador Dog")
// console.log(myPet.describe());


function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
let myAnimal = new Animal("Cat")
// console.log(myAnimal.sound());


// functional error 
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
    this.name = name;
}
let tea = new Drink("Tea")
// let coffee =  Drink("Coffee") will throw an error as missing new keyword