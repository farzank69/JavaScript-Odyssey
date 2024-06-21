// singleton
// Object.create

// object literals

const mySym = Symbol("key1")       // way of declaring Symbol.


const JsUser = {
    name: "Farzan",
    "full name": "Farzan Khan",
    [mySym]: "mykey1",
    age: 21,
    location: "Punjab",
    email: "farzan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email)    // don't use. with objects       
// console.log(JsUser["email"])       // always use brackets with objects.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "farzan@yahoo.com"
// Object.freeze(JsUser)               // it freeze the further updation in obj.
JsUser.email = "farzan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Users it's ${this.name}`);
}
console.log(JsUser.greeting());              // function calling.
console.log(JsUser.greetingTwo()); 
