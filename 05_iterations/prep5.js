// for each loop
// High Order Function

const langauges = ["c++", "javascript", "python", "ruby", "swift"]

langauges.forEach(function (val) { 
    //  console.log(val);
})

// arrow function
langauges.forEach( (variableName) => {
    // console.log(variableName);
})

function printMe(item) {
    // console.log(item);
}
langauges.forEach(printMe)        //give reference only.

langauges.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

// important in database. revise it.
const myCoding = [
    {
        langaugeName: "python",
        languageFileName: "py"
    },
    {
        langaugeName: "javascript",
        languageFileName: "py"
    },
    {
        langaugeName: "java",
        languageFileName: "java"
    }
]
myCoding.forEach( (item) => {
    console.log(item.langaugeName);
})