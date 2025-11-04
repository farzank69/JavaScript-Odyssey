const person = {
    name: "farzan",
    greet() {
        console.log(`I am ${this.name}`);   
    }
}
person.greet();

const greetFunction = person.greet
greetFunction();    // here it lost the context of the name when storing it to a different variable.

// let bind the context
const bindGreet = person.greet.bind({name: "John"})
bindGreet();

// bind, call and apply