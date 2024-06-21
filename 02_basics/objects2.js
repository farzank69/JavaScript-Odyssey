// Singleton (with help of constructors)
// const appUser = {}       //non-singleton object
const appUser = new Object()

appUser.id = "335"
appUser.name = "John"
appUser.isLoggedIn = false
// console.log(appUser);

// Nested object is possible.

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Farzan",
            lastname: "Khan"
        }
    }
}
console.log(regularUser.fullname);