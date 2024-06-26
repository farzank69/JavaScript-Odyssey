// reduce                   : go through mdn once.

const myNums = [1, 2, 3]

// const Total = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} currval: ${currval}`);
//     return acc + currval
// }, 0)

// Using arrow function
const Total = myNums.reduce( (accumulator, currentvalue) => (accumulator + currentvalue), 0)
// console.log(Total);

// Shopping Cart
const shoppingCart = [
    {
        courseName: 'data science',
        price: 5999
    },
    {
        courseName: 'web development',
        price: 2999
    },
    {
        courseName: "Mobile development",
        price: 1999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0)
console.log(priceToPay);