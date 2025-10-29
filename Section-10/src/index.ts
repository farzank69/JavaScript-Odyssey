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

    // private _courseCount = 1       // private can accessed within the class not outside 
    protected _courseCount = 1       // protected can be accessed in the child class but not outside 

    readonly city: string = "Delhi"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){    
    }
    private deleteToken() {
        console.log("Token deleted");
        
    }

    get getApplEmail(): string {
        return `apple${this.email}`
    }
    // get is used to get any property (mostly so private methods can be exposed outside with additional logic/restriction)
    get courseCount(): number {
        return this._courseCount
    }
    // to set the property you need to get it first
    set courseCount(courseNum) {        //setter: there should be nothing in the return type 
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1!!!")
        }
        this.courseCount = courseNum
    }
}

// Inheritence

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}



const farzan = new User("farzan@gmail.com", "farzan");
// farzan.city = "Saint Denis"
// farzan.deleteToken()