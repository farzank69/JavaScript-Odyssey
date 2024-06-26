//  for in loop: it shows key and value seperately and doesn't go with map.

//  trying on objects -- using for-in we can iterate objects.
const myObject = {
    player1: 'lostdevil',
    player2: 'denjidevil',
    player3: 'babayagae',
    player4: 'sakura'
}
for (const key in myObject) {
    // console.log(`${key} username is ${myObject[key]}`);
}

// Here in array, for-in doesn't show direct value instead give key value.
const langauges = ["java", "python", "c++", "javascript"]
for (const key in langauges) {
    // console.log(key);
}

// Map is not iterable that's why no answer is shown in output.
// const map = new Map
// map.set('IN', 'India')
// map.set('US', 'United States')
// map.set('JP', 'Japan')

// for (const key in map) {
//     console.log(key);
// }