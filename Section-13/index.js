const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
// const users = require('./MOCK_DATA.json'); 

const app = express();
const PORT = 8000;

//connection
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(() => console.log('mongoDB Connected'))
.catch((err) => console.log("mongo error", err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
}, 
    {timestamps: true}
)

// model 
const User = mongoose.model("user", userSchema)

app.use(express.urlencoded({extended: false}))

// Middleware 1
// app.use((req, res, next) => {
//     console.log("Hello from Middleware1");
//     // return res.end("Done from Middleware");
//     // next();
// })

// Middleware 2
app.use((req, res, next) => {
    fs.appendFile('./log.txt', `\n${Date.now()} : ${req.method} : ${req.path}`, (err, data) => {    
        next();
    })
})

// SSR
app.get('/users', async(req, res) => {
    const allDbUsers = await User.find({ });
    const html = `
    <ul>
        ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul
    `;
    return res.send(html)
} )

// ROUTES -> REST APIs
app.get('/api/users', async(req, res) => {
    const allDbUsers = await User.find({ });

    // res.setHeader('X-MyName', 'Farzan Khan') // Testing out custom headers
    // always add X to custom headers; its a good practice
    return res.json(allDbUsers);
})

// get respective user
app.get('/api/users/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
})

app.post('/api/users', async(req, res) => {
    const body = req.body;
    if (!body){
        return res.status(400).json({status: "error", message: "all fields are required"})
    }
    // console.log("body", body);
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    console.log("Data", result);
    
    return res.status(201).json({message: "success"})
})
app.patch('/api/users/:id', async(req, res) => {
    // Edit the user with ID
    const id = Number(req.params.id)
    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex === -1){
        return res.status(404).json({status: "error", message: "user not found"});
    }

    const body = req.body
    users[userIndex] = {...users[userIndex], ...body};

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err){
            res.status(500).json({status: "error", message:"Failed to update user"});
        }
        return res.json({status: "success", user: users[userIndex]})
    })
})
app.delete('/api/users/:id', (req, res) => {
    // Delete the user with id
    const id = Number(req.params.id)
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1){return res.status(404).json({status: "error", message: "user not found"}) }
    users.splice(userIndex, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err){
            res.status(500).json({status: "error", message:"Failed to delete user"});
        }
        return res.json({status: "success", message: "user deleted successfully" })
    })
})

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


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))