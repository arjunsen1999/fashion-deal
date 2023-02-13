require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const path = require('path')

let staticPath = path.join(__dirname, "/View");
// console.log(staticPath)

// Connection to the db import
const {Connection} = require("./Config/db");

// All Routes import here
const {authRouter} = require("./Routes/Auth.route");

// Globel Middleware
app.use(express.json());
app.use(cors());
// app.use(express.static(staticPath));
app.set('view engine', 'hbs');

// app.get("/hello", (req, res) =>{
//     res.render(`index.hbs`)
// })

app.get("/", (req, res) =>{
    res.send("<h1>Hello from the other side</h1>")
})

// All Routes
    // Authentication
    app.use("/auth", authRouter);


// Start Server
app.listen(PORT, () =>{
    //For Connection to the db
    Connection();
    console.log(`Listening at the http://localhost:${PORT}`);
})