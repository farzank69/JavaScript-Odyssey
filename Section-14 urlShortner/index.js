const express = require("express");
const urlRoute = require("./routes/urls");
const { connectMongoDb } = require("./connection");

const app = express();
const PORT = 8001;

app.use(express.json())

connectMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB connected!"))

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
