//  types of memory

// stack (Primitive)     Heap (Non-Primitive)
// call by value          call by reference
// let's take an example to understand both the concepts.


let myGmail = "farzan@google.com"

let anotherGmail = myGmail

anotherGmail = "khan@gmail.com"

console.log(myGmail);       // copy of myGmail is created and the copy got changed in anotherGmail i.e. "khan@gmail.com"
console.log(anotherGmail);


let gameOne = {
    name: "bgmi",
    rank: "aceMaster"
}

let gameTwo = gameOne;

gameTwo.name = "clash of clans"

console.log(gameTwo);           // here the name is changed in actual value so call by reference is working as gametwo updated game one as well.
console.log(gameOne);
