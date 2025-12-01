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
// const getMoreSearchProducts = <T,>(products: T[]): T => {        // the comma after T is to mention that it's not a jsx type rather its generic.
//     // do some database operations
//     const myIndex = 4
//     return products[myIndex]
// }

interface Database{
    connection: string,
    username: string,
    password: string
}

function getUser<T, U extends string>(valOne: T, valTwo: U): object {
    return { 
        valOne,
        valTwo
    }
}
// getUser(1,2)     as it extends the generic to string it won't work further (so we can even specify the generic like which type it can take)

interface quiz {
    name: string
    type: string
}

interface course{
    name: string
    author: string
    subject: string
}

class sellable<T>{ 
    public cart: T[] = []             // this will be the generic type and will take array of it.

    addToCart(product: T){
        this.cart.push(product)      // whatever type of product it will be; get pushed into the cart.
    }
}

const sellableQuiz = new sellable<quiz>()
sellableQuiz.addToCart({name: "math quiz", type: "maths"})

const sellableCourse = new sellable<course>()
sellableCourse.addToCart({name: "react course", author: "farzan", subject: "web dev"})
    console.log("obj is ", obj)
}