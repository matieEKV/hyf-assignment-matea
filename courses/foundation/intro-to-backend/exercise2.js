import express, { request } from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// TODO implement more routes here
//return all emails from users
app.get("/all-emails", async (req, res) => {
  const rows = await knexInstance.raw("SELECT email FROM users;");
  res.json(rows);
});

//return all first and last names from users
app.get("/all-names", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT first_name, last_name FROM users;"
  );
  res.json(rows);
});

//return all users which have emails on yahoo
app.get("/yahoo-emails", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%yahoo%';"
  );
  res.json(rows);
});

//return styled html as response for user count
app.get("/user-count", async (req, res) => {
  const rows = await knexInstance.raw("SELECT COUNT(*) as total FROM users;");
  // res.json(rows[0].total);
  res.send(
    `<div style="text-align: center; border: 5px solid purple; margin-top: 10%;"><p style="font-weight: bold; font-size: 2rem;"><em>Your database contains:</em></p><p style="font-size: 5rem; color: green; font-weight: bold;">${rows[0].total} users </p></div>`
  );
});

//add new user through postman
app.post("/users", async (req, res) => {
  console.log(req.body);
  const { first_name } = req.body;

  if (!first_name || first_name.length === 0) {
    return res.sendStatus(400);
  }

  await knexInstance("users").insert({ first_name });

  return res.status(201).json({ message: "User created" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
