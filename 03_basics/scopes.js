// Scope
// different types of scopes in javascript 
// var c = 40

let a = 300

if (true) {
    let a = 10; 
    const b = 20;
    var c = 30;
    // console.log("Inner: ", a);
}


{
    //this is the scope whether a function/object/loops/array or any other.
}

// console.log(a);
// console.log(b);
// console.log(c);          // var is problematic as it does not understand the block scope and global scope.

// Nested Scope

function one(){
    const username = "farzan"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username = "farzan"
    if(username === "farzan"){
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);          // bcoz this is out of scope

// +++++++++++++++++++++    interesting    +++++++++++++++++++++++++++
console.log(addOne(5))
function addOne (num){
    return num + 1
}

addTwo(5)              // this will not work in some cases we can't call function before declaration
const addTwo = function(num){
    return num + 2
}
 
