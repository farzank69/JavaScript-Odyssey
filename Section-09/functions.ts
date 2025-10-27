function addTwo(num:number): number{         // . after function means function can only output number.
    return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper('farzan');
signUpUser("farzan","farzan@gmail.com",false);
loginUser("khan", "khan@example.com");

// Ways of writing functions.
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "batman"]
heros.map((hero): string => {       // here defining that output should always be a string.
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1      this will throw error as output is void; it won't return anything.
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}
