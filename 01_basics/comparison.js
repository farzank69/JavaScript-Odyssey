// console.log("2" > 1);
// console.log("2" < 1);



// --- Avoid these types of conversion, however check using console.log for understanding. --- 

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
The reason is that an equality check == and comparison > < >= <= work differently.
Comparison convert null to a number, treating it as 0.
That's why in 6th line 'null >= 0' is true and in 4th line null > 1 is false.
*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// --------------------------------------------------------------- // 

// (===) strict checking 

console.log("2" === 2);            // it checks the datatypes as well while comparison.

// use clean code.