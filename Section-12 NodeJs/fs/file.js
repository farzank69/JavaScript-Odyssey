const fs = require("fs");

// fs.writeFileSync('./Section-12\ NodeJs/fs/test.txt', 'Hey There!')


// fs.appendFileSync('./Section-12\ NodeJs/fs/test.txt', 'Hello, Its from async!!')

const result = fs.readFileSync("./Section-12\ NodeJs/fs/test.txt", "utf-8")
console.log(result)