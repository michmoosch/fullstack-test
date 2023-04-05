const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "mysql_db",
  user: "MYSQL_USER",
  password: "MYSQL_PASSWORD",
  database: "CS160Project",
});


app.get("/", async (req, res) => {

  res.json({test: "passed"});
  
});

app.post("/registerUser", async (req, res) => {
const {email, firName, lstName, userPsw} = req.body


const insertQuery = "INSERT INTO users (UserId, UserPsw, UserFirstName, UserLastName, UserEmail) VALUES (?, ?, ?, ?, ?)";
  db.query(insertQuery, [0, userPsw, firName, lstName, email], (err, result) => {
    res.json(JSON.stringify(result));
  });
})




app.listen("3001", () => {});
