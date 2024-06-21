const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);   //not a good practice of adding 2 arrays.
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);  // also not a good way.
// console.log(all_heros);

// There is a term called spreading which is used more and in a better way to add 2 arrays in a single array.
// Using 3 dot to merge/add array is good way.

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const myArr = [1, 2, [3, 5], 6, 7, [3 , [4, 9], 8]]
const realArr = myArr.flat(Infinity)
// console.log(realArr);
// flat method is also a good practice to use when there are arrays inside array and it is confusing to understand.


console.log(Array.isArray("Farzan")); // it's not an array.
console.log(Array.from("Farzan"));  // Using from, it's now converted into array.

console.log(Array.from({name: "Farzan"}));    //interesting.


// Here you have to tell that on which you want to perform 'from' either on key or value from the object.

// This technique is very helpful while doing web scraping when we want to put the web data into an array to do further activities because array is helpful in peforming different tasks on a value.

let score1 = 100;
let score2 = 200;
let score3 = 400;

console.log(Array.of(score1, score2, score3)); // of combines the different values into a single array.

