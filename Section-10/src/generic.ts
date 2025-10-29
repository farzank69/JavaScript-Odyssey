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
function identityFour<T>(val: T): T {
    return val
}

interface container {
    brand: string
    type: string
}
// identityFour<container>({})