"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "farzan",
    email: "farzan@gmail.com",
    isActive: true
};
// Use case of object is through the functions
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// bad way of using objects.
var newUser = { name: "farzan", isActive: false, email: "@example.com" };
createUser(newUser);
function createCourse() {
    return { name: "webdev", price: 399 };
}
