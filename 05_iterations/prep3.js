// for of loops: it gives direct values of the Objects/things.

// [" ", " ", " "]
// [{}, {}, {}]
let arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val);
}

// for of loops on strings
const greetings = "Welcome User!"
for (const greet of greetings) {
    if(greet == " "){                           // extra checking.
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map
map.set('IN', 'India')
map.set('US', 'United States')
map.set('JP', 'Japan')

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// for-of on object is not iterable
const myObject = {
    'game1' : 'Mini Militia',
    'game2' : 'clash of clans'
}
// for (const val of myObject) {
//     console.log(val);
// }