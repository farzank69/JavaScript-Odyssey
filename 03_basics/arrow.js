const user = {
    username: "farzan",
    price: 899,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "khan"
// user.welcomeMessage()

// console.log(this);        // empty object as there is nothing in global to refer.

// to know about this only.


// function chai (){
//     let username = "farzan"
//     console.log(this.username);    //undefined bcoz this keyword doesn't work in function only in object it works.
// }
// chai()

//arrow function     replace function with =>
const chai = () => {
    let username = "farzan"
    console.log(this);   
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return -> same line execution.
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "farzan"})
//  { } -> means write return and ( ) -> no return should be written.  

console.log(addTwo(3, 4))

// const myArray = [3, 5, 7, 9]

// myArray.forEach()
