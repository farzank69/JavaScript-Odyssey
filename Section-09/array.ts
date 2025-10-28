const cars: string[] = []
// const power: number[] = []
const power: Array<number> = []      // different ways of creating type array.

type User = {
    name: string
    isActive: boolean
}

const allUser: User[] = []     // this array will take User type which is defined above

const MLModel: number[][] = [
    [255,255,255],
    []
]

cars.push("honda")
power.push(345)