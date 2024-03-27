const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

app.get("/persons", async (req, res) => {
  const persons = await db.query("select * from person");
  res.status(200).json(persons.rows);
});

app.post("/persons", async (req, res) => {
  const { name, lastname } = req.body;
  const newPerson = await db.query(
    "insert into person (name, lastname) values ($1, $2) returning *",
    [name, lastname]
  );
  res.status(201).json(newPerson.rows[0]);
});

// PATCH / PUT by id ---> UPDATE ... SET ... WHERE

// GET by id   ---> SELECT ... FROM ... WHERE

// DELETE by id ---> DELETE ... WHERE

app.listen(5000, () => console.log("Port 5000 is running"));
