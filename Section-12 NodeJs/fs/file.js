const fs = require("fs");
const os = require("os");
// fs.writeFileSync('test.txt', 'Hey There!')


// fs.appendFileSync('test.txt', 'Hello, Its from async!!')

// const result = fs.readFileSync("test.txt", "utf-8")
// console.log(result)

fs.readFile('test.txt', 'utf-8', (err, result) => {
    console.log(result);
})

// console.log(os.cpus().length);
