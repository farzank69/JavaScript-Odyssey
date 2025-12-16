enum seatChoice {
    AISLE = "aisle",           // there are lot more thing in enum to tweak the values.
    MIDDLE = 7,   
    WINDOW,
    FOURTH
}
const myseat = seatChoice.AISLE


console.log(myseat);   // aisle
console.log(seatChoice.WINDOW);  // 8
console.log(seatChoice.FOURTH);  // 9

export {}