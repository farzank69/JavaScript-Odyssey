// const user: (number | string)[] = ["fk", 123]    // normally in the array the order doesn't matter for types.
// order of the elements also matter in tuples 
let user: [number, string, boolean]         // this a way of writing tuple

user = [153, "fk", false]

let rgb: [number, number, number] = [255, 128, 64]

type User = [number, string]

const newUser: User = [1123, "example@google.com"]

newUser[1] = "fk@gmail.com"
// newUser.push(true)  // this is wrong. -> though it will allow the push method (be cautious)