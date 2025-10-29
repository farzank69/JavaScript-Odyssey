// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Delhi"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

class User {                       // Better way of using classes along with its property.
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){    
    }
}
const farzan = new User("farzan@gmail.com", "farzan");
// farzan.city = "Saint Denis"