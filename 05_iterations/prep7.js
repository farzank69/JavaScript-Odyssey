const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {
//     return num + 10
// })
// console.log(newNums);


//  Chaining of methods
const myNum = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 50)

console.log(myNum);
/* filter is true or false whichever satisfies that will be pass. */