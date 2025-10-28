interface User {
    readonly dbId: number,
    email: string, 
    userId: number,
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

// re-opening of interface
interface User { 
    githubToken: string
}

interface Admin extends User {             // extending the whole interface and adding a new section
    role: "admin" | "ta" | "learner"
}

const farzan: Admin = {dbId: 774, email: "fk@gmail.com", userId: 4667, 
    githubToken: "github", role: "admin",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "farzan10", discount: 10) => {
        return 10
    }
}
farzan.email = "f@yahoo.com"
// farzan.dbId = 335 // this is wrong as it is readonly
