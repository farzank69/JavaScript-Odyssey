let score: number | string = 35     // multiple types of data we can provide to this variable using union

score = 44
score = "845"

type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let farzan: User | Admin = {name: "farzan", id: 223}  // this variable can be user as well as admin because of its type.

farzan = {username: "fk", id: 223}

// function getDbId(id: number | string){
//     // making API calls
//     console.log(`DB id is ${id}`);
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string") {      //strictly checking the type even though using union in the parameter type
        id.toLowerCase()
    }
    else{
        id + 2
    }
}

// array
 
const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (number | string | boolean)[] = ["1", "2", 3, false]    // mixed values then use the type in the parenthesis

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"   // this is not gonna because the type we already defined above while declaring the variable
