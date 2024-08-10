const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "dhich",
  password: "dhich",
  database: "sign_up",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to Database");
});

app.get("/", (req, res) => {
  const query = `SELECT * FROM user_data`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Error fetching sign up data");
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const query = `INSERT INTO user_data (username, password) VALUES(?, ?)`;

  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).send("Error: saving user to database");
    } else {
      res.status(200).send("User data saved successfully");
    }
  });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
