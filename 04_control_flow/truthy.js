// truthy and falsy

const username = []

if(username){
    console.log("Got user name");
} else{
    console.log("Don't have user name");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN  

// truthy values
// "0", "false", " ", [], {}, function(){}


// Array Empty Checking
// if(username.length === 0){
//     console.log("Array is empty");
// }

// Object Empty Checking
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// here we binding object keys into array and then performing length methods on it bcoz direct methods are not there for objects.

/* Do in console  (basics)
false == 0       => true
false == ''      => true
0 == ''          => true
*/

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5  ?? 10          // 5
// val1 = null ?? 10        // 10
// val1 = undefined ?? 15   // 15
val1 = null ?? 10 ?? 5      // 10

// console.log(val1);

// Ternary Operator

// condition ? true : false

const foodPrice = 100
// foodPrice <= 80 ? console.log("less than 80") : console.log("more than 80");