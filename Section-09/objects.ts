// const User = {
//     name: "farzan",
//     email: "farzan@gmail.com",
//     isActive: true
// }

// // Use case of object is through the functions

// function createUser({name: string, isActive: boolean}) {}
// // bad way of using objects.
// let newUser = {name:"farzan",isActive: false, email: "@example.com"}
// createUser(newUser)

// function createCourse():{name:string, price: number}{                   // function definition then object type and then object body
//     return {name: "webdev", price: 399}
// }

// Type Alias

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{           // this method will return User as a type
//     return {name: "", email: "", isActive: true}
// }
// createUser({name: "", email: "", isActive: true})



// READONLY and optional

type User = {
    readonly _id: string     // you can't change the type of this id (referring to mongodb id)
    name: string;
    email: string
    isActive: boolean
    creditcardDetails?: number      // ? means this field is optional.
}

let myUser: User = {
    _id: "1234",
    name: "farzan",
    email: "farzan@example.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {cvv: number}  // & here to combine the details.


myUser.email = "farzan@gmail.com"
// myUser._id = "asdf"    // can change as it is only readonly





export {}
