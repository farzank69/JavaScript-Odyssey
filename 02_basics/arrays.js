//  ARRAY             => shallow copy and deep copy

const myArr = [0, 1, 3, 4, 5, 8]
const myGame = ["clash of clans", "mini militia", "god of war"]

const myGames = new Array(1, 2, 5, 7)
// console.log(myGame[2]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0);      // it adds the value in first place... but it is not a good practice while developing big projects.

// myArr.shift();       // it removes the first element from the array and return the rest of the array.
// console.log(myArr);

// console.log(myArr.includes(8));  // it checks the value if it is present in the array or not and gives output as true/false.

// console.log(myArr.indexOf(5));

const newArr = myArr.join()   // it converts the arrays into string and joined them.
// console.log(myArr);
// console.log(newArr);

// slice and splice
// Splice manipulate the original array and split it into two according to the value.

console.log("A ",myArr);

const myNew = myArr.slice(1, 3);
console.log(myNew);

console.log("B ",myArr);

const myNew2 = myArr.splice(1, 3);
console.log("C ",myArr);
console.log(myNew2);

