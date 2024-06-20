//  old way of concatenating string .... don't use this method.
const name = "Farzan"
const repoCount = 20

// console.log(name + repoCount + "is the repoCount");

//  Best way to use string concatenation. (String interpolation: using ` ` => back ticks)

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// One more way to declare a String and it is describing more features.
// Learn more about this method and try to use this only while declaring.

const gameName = new String("mini-militia")

// console.log(gameName.__proto__);  // this is used to now the prototypes of the object.... it's just a syntax nothing much .. you can access the prototype using '.'

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 7)
console.log(anotherString);

const stringOne = "    farzan    "
console.log(stringOne);
console.log(stringOne.trim());

// using replace method.

const url = "https://farzan.com/farzan%20khan"
console.log(url.replace('%20', '-'));

//includes is used to find the value in the string.
console.log(url.includes("farzan"));     
console.log(url.includes("anime"));

console.log(gameName.split('-'));