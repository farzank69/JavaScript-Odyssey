const express = require("express");
const fs = require("fs");

const { logReqRes } = require("./middlewares");
const { connectMongoDb } = require("./connection.js");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/testdb").then(() => console.log("MongoDB connected!"));

app.use(express.urlencoded({ extended: false }));

// Middleware 1
// app.use((req, res, next) => {
//     console.log("Hello from Middleware1");
//     // return res.end("Done from Middleware");
//     // next();
// })

// Middleware 2
app.use(logReqRes('log.txt'));

// SSR
app.use("/api/users", userRouter);

// if same route is there with different http methods. (grouping)
// app.route('/api/users/:id').get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// }).post((req, res) => {
//     return res.json({status: 'pending'});
// }).patch((req, res) => {
//     return res.json({status: 'pending'});}
// ).delete((req, res) => {
//     return res.json({status: 'pending'})
// })

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
