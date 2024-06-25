// IIFE - Immediately Invoked Function Expressions
// ~ the function which executes immediately.
// ** There are chances that sometime global scope creates pollution(problem) and to remove/eliminate the global scope pollution we generally use iife.

(function database() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();                            // USE ; to end IIFE execution.
// ()()
// database()                      default function call

// iife using arrow function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Farzan")
