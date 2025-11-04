function* generateNumber(){
    yield 1;
    yield 2;
    yield 3;   
}

let gen = generateNumber();
let genTwo = generateNumber();
// console.log(gen); // this will return generator object. 
console.log(gen.next().value);     // this is the way of calling the generator and getting the value.
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

