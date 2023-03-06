const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "genzdb",
});

app.post("/registerUser", (req, res) => {
  const { nickname } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  let SQL  = "INSERT INTO users (Nickname, Email, Password) VALUES (?,?,?)";

  db.query(SQL,[nickname, email, password], (err, result) => {
    console.log(err);
  }); 
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
