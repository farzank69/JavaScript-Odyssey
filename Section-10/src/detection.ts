// Narrowing

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 5
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return         
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
// !!!!!!!!!!!!!!!!
//  DON'T DO THIS!
//  We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.
// !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// "in" operator in narrowing
interface User{
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {       // this helps in narrow down the interface 
        return account.isAdmin
    }
}

// instanceof narrowing -> used in when new is used.
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase);
    }
}

// type predicates
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{      // using the function return type (pet is fish), this now clearly states that this function will return a value.
    return(pet as Fish) !== undefined      // this function is return boolean value for now
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)){
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

// Discriminated Union and Exhaustiveness checking

interface Circle{
    kind: "circle",
    radius: number
}
interface Square{
    kind: "square",
    side: number
}
interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

//exhastive check
function getArea(shape: Shape){
    switch (shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        
        case "square":
            return shape.side * shape.side
        
        case "rectangle":
            return shape.length * shape.width
        
        default: 
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

function isString(val: unknown): val is string {
    return typeof val === "string"
}

function example(foo: unknown) {
    if (isString(foo)) {
        foo // foo is string here
    } else {
        foo // foo is unknown here
    }
}
// use of 'unknown' type
function safeParse(json: string): unknown {
    return JSON.parse(json)
}

const obj = safeParse('{"name":"John", "age":30}')

if (typeof obj === "object" && obj !== null) {
    console.log((obj as { name: string }).name)
}

// use of 'never' type
function fail(msg: string): never {
    throw new Error(msg)
}

function infiniteLoop(): never {
    while (true) {
    }
}

// Generics
// function identity(arg: any): any {
//     return arg
//          

export {}