const score: Array<number> = []
const name: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

// Generic -> function can take any value type but will return the same type.
function identityThree<Type>(val: Type): Type{
    return val
}
identityThree("Farzan")

// this is another way of using the type
// function identityFour<T>(val: T): T {
//     return val
// }

interface container {
    brand: string
    type: string
}
// identityFour<container>({})

// Generic Functions
// function getSearchProducts<T>(products: T[]): T {
//     // do some database operations
//     const myIndex = 3
//     return products[myIndex]
// }

// Generic Arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => {        // the comma after T is to mention that it's not a jsx type rather its generic.
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}