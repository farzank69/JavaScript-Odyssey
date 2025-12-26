const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json'); 

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: false}))

// SSR
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul
    `;
    return res.send(html)
} )

// ROUTES -> REST APIs
app.get('/api/users', (req, res) => {
    return res.json(users);
})

// get respective user
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);

})

app.post('/api/users', (req, res) => {
    const body = req.body;
    // console.log("body", body);
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length})
    })
})
app.patch('/api/users/:id', (req, res) => {
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
    return res.json({status: 'pending'});
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