function myname (){       //creating a function.
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("Z");
    console.log("A");
    console.log("N");
}
// myname()              calling function
  
// function sumTwoNumber(number1, number2) {               //(parameter)
//     console.log(number1 + number2);
// }
// const result = sumTwoNumber(2, null)                   // (Arguments)
// console.log(result);                         // this is problematic now.


function sumTwoNumber(number1, number2) {              
    // let result = number1 + number2;
    // return result
    return number1 + number2
    // nothing will execute after return statement.
}
const result = sumTwoNumber(2, null)                   
// console.log("Result: ", result); 


function userLoginMessage(username) {
    // if(username === undefined){
    if(!username){                          //this is also a method like L:29
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage("sam"));

// if someone pass nothing in function calling then- undefined will show to avoid this we can use if else condition. like above

// common situation like creating shopping cart:


function calculateCartPrice(...num1){             // ... rest operator
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 500));


const user = {
    username: "bourbon",
    price: 299
}

function handleObject(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}
// console.log(handleObject(user));
handleObject({
    username : "bourbon",
    price: 399
})

const newArray = [200, 400, 800, 1000]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(newArray));
// one more way of calling.
console.log(returnSecondValue([200, 300, 500, 800]));