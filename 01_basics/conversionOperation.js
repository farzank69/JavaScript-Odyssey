let score = "45ab"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0


let isLoggedIn = "farzan"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "farzan" => true


let someNumber = 30

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// **************************** Operations *******************************

let value = 3
let negValue = -value
// console.log(negValue);

str1 = "hello"
str2 = " Farzan"

str3 = str1 + str2
// console.log(str3);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);     => power 
// console.log(2 % 2);
// console.log(2 / 2);



// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // first is string so remaining sticks to the string
// console.log(1 + 2 + "2");     // due to of type conversion it applies

// console.log(2 + 4 * 5 % 3);   
/* don't use this type of syntax, do use parantheses strictly for best practice. */

// console.log(+true);     // boolean value and putting + will increment it to 1.

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);