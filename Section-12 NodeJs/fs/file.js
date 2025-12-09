const fs = require("fs");
const os = require("os");
// fs.writeFileSync('test.txt', 'Hey There!')


// fs.appendFileSync('test.txt', 'Hello, Its from async!!')

// const result = fs.readFileSync("test.txt", "utf-8")
// console.log(result)

fs.readFile('test.txt', 'utf-8', (err, result) => {
    console.log(result);
})

// async function readFile() {
//     try {
//         const data = await fs.promises.readFile('test.txt', 'utf-8');

// (async () => {
//   const file = await open('./some/file/to/read');

//   for await (const line of file.readLines()) {
//     console.log(line);
//   }
//   })();

// console.log(os.cpus().length);
