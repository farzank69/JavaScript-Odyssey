require("dotenv").config({quiet: true});
const express = require("express");
const path = require("path")
const cookieParser = require("cookie-parser");
const urlRoute = require("./routes/urls");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")
const { checkForAuthentication, restrictTo } = require("./middlewares/auth")

const { connectMongoDb } = require("./connection");
// const URL = require("./models/url");

const app = express();
const PORT = 8001;


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthentication);

connectMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB connected!"))

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

app.use("/url", restrictTo(["NORMAL", "ADMIN"]) , urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

// app.get('/test' ,async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls,
//     })
// })

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));

