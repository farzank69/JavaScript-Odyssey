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
// console.log(regularUser.fullname.userfullname.firstname);

// Objects methods.

const obj1 = {1: "marvel", 2: "ironman"}
const obj2 = {3: "dc", 4: "superman"}
// const obj3 = {obj1, obj2}              // don't use this.     

// merging two objects into a single object using assign method. Here if we use {} then it is a good syntax in which all the objects are assigned to this blank obj. 
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}    // this method is the BEST consider this only.
// console.log(obj3); 


// when the data is coming from database then it is in the form of array in which multiple objects are there. Then how to know about that:

const Users = [
    {
        id: 123,
        email: "f@gmail.com"
    },
    {
        id: 213,
        email: "f@gmail.com"
    },
    {
        id: 321,
        email: "k@gmail.com"
    }
]
Users[1].email             

console.log(appUser);

console.log(Object.keys(appUser));     // this extracts only keys from obj.
console.log(Object.values(appUser));     // this extracts only values from obj.
console.log(Object.entries(appUser));     // very less use(makes arr in array)

console.log(appUser.hasOwnProperty('335'));  // this is very useful as in this we can check if the 'key' is in the object or not.


