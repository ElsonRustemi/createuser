//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_registration",
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (!err) {
        console.log("Connection successful.");

    } else {
        console.log(err);
    }
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const query = `INSERT INTO user (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?)`;
    const params = [firstName, lastName, username, email, password];

    mysqlConnection.query(query, params, function (err, result) {
        if (err) {
            console.log("An error occured.");
        } else {
            console.log("Record Inserted.");
        }
    });

    res.sendFile(__dirname + "/index.html");

});





app.listen(3000, function () {
    console.log("Server started at port 3000");
});


