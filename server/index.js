//DECLARATION
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000

//CALLING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//SETUP SERVER
app.get("/api", (req, res) => {
    res.json({
        message: "Server Working"
    })
});

//CREATING USERS

const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
    const { Email, Password, Name } = req.body;

    const id = generateID();
    const result =users.filter(
        (user) => user.email === Email && user.password === Password
    );
    if(result.length === 0){
        const newUser = { id, Email, Password, Name };
        users.push(newUser);
        return res.json({
            message: "Account Created succesfully"
        })
    }
    res.json({
        error_message: "User already exist"
    })
})

app.post("/api/login", (req, res) =>{
    const {  Email, Password } = req.body

    let result = users.filter((user) => user.email === Email && user.password === Password);
    if(result.length !== 1){
        return res.json({
            error_message: "Incorrect Credential",
        })

    } else{
        res.json({
            message: "Login succesfully",
            id: result[0].id
        })
    }
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
