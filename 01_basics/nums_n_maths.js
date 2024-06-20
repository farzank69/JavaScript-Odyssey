const score = 100
// console.log(score);

// good practice while declaring number if you want to use.
const balance = new Number(300)
// console.log(balance)
// console.log(balance.toString().length)        // number->string and finding length

// this is very important as this method makes the number in precise value using the decimal and it is very useful when you build any e-commerce website.
// console.log(balance.toFixed(2))

const otherNum = 123.896
// console.log(otherNum.toPrecision(3));   // careful while using precision value and checks the value from right to left to make round off.
// for example:        Priority before decimal.
const exampleNum = 1212.987
// console.log(exampleNum.toPrecision(5));

// one more methods
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // to make it in indian format or you can check mdn website for more such values.

// *******************   Maths  ***********************

// console.log(Math)
// console.log(Math.abs(-4))    // 4
// console.log(Math.round(4.95))    // 5
// console.log(Math.floor(4.9))    // 4
// console.log(Math.ceil(4.2))    // 5
// console.log(Math.min(4, 2, 5, 8))    // 2
// console.log(Math.max(4, 2, 5, 8))    // 8

// practice random as much as you can
console.log(Math.random());     // it'll give random values between 0 and 1.
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 60;                 // we can use these min max values to create a dice game and the random method along with.

console.log(Math.floor(Math.random() * (max - min + 1)) + min);   // +1 we're using to avoid 0.
// This above line is very important (Line: 42)

// Video: 12