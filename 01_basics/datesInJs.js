// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);          // Object

// let myNewDate = new Date(2024, 1, 20)          //month starts from 0 means Jan 
// let myNewDate = new Date(2024, 1, 20, 5, 14)
// let myNewDate = new Date("2024-04-11")       // U.S format   YYYT-MM-DD
let myNewDate = new Date("02-20-2024")         // India format MM-DD-YYYY
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now() 
// console.log(myTimeStamp);                         // shows value in miliseconds
// console.log(myNewDate.getTime());
// console.log(Date.now()/1000);                   // to find time in seconds  
// console.log(Math.floor(Date.now()/1000));         // to avoid decimals  

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{
    weekday: "narrow",
})
//providing more details to the date, revise this date and time again to gain more understanding.
// Video: 13