// Asynchronous Javascript with event loop

function sayhello(){
    console.log("Let try out the log....");
    
}

setTimeout(() => {
    sayhello();
}, 4000);

console.log("Hello World");

for (let index = 0; index < 10; index++) {
    console.log(index);
}
